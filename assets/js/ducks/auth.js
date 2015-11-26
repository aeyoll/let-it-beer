import $ from 'jquery'
import Cookie from 'js-cookie'
import { pushState } from 'redux-router'
import jwtDecode from 'jwt-decode'

const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

const LOGOUT_USER = 'LOGOUT_USER'

const DISCONNECT_USER = 'DISCONNECT_USER'

const initialState = {
  token: null,
  username: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        'isAuthenticating': true,
        'statusText': null
      }

    case LOGIN_USER_SUCCESS:
      Cookie.set('token', action.payload.token, { expires: 365 })

      $.ajaxSetup({
        headers: { 'Authorization': 'JWT ' + action.payload.token }
      })

      try {
        let decoded = jwtDecode(action.payload.token)

        return {
          ...state,
          'isAuthenticating': false,
          'isAuthenticated': true,
          'token': action.payload.token,
          'username': decoded.username,
          'statusText': `You have been successfully signed in as ${decoded.username}.`
        }
      } catch (e) {
        Cookie.remove('token')

        return {
          ...state,
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'username': null,
          'statusText': `Invalid access token. Please log in again.`
        }
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null,
        'username': null,
        'statusText': `Authentication Error: ${action.status} ${action.statusText}`
      }

    case LOGOUT_USER:
      Cookie.remove('token')

      return {
        ...state,
        'isAuthenticated': false,
        'token': null,
        'username': null,
        'statusText': 'You have been successfully logged out.'
      }

    case DISCONNECT_USER:
      return {
        ...state,
        'isAuthenticated': false,
        'token': null,
        'username': null,
        'statusText': 'Your session has expired, you need to login again.'
      }
    default:
      return state
  }
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logout() {
  return {
    type: LOGOUT_USER
  }
}

export function disconnect() {
  return {
    type: DISCONNECT_USER
  }
}

export function login(username, password, redirect) {
  return function(dispatch) {
    dispatch(loginUserRequest())

    return $.post('/api/v1/token-auth/', { username: username, password: password })
      .done(response => {
        let redirect = redirect || '/'
        dispatch(loginUserSuccess(response.token))
        dispatch(pushState(null, redirect))
      })
      .fail(error => {
        dispatch(loginUserFailure(error))
      })
  }
}

export function tokenVerify(token) {
  return function(dispatch) {
    $.post('/api/v1/token-verify/', { token: token })
      .done(response => {
        dispatch(refreshToken(token))
      })
      .fail(error => {
        dispatch(disconnect)
      })
  }
}

export function refreshToken(token) {
  return function(dispatch) {
    $.post('/api/v1/token-refresh/', { token: token })
      .done(response => {
        dispatch(loginUserSuccess(response.token))
      })
      .fail(error => {
        dispatch(disconnect)
      })
  }
}

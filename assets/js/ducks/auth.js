const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

const LOGOUT_USER = 'LOGOUT_USER'

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
      localStorage.setItem('token', action.token)

      try {
        let decoded = jwtDecode(action.token);

        return {
          ...state,
          'isAuthenticating': false,
          'isAuthenticated': true,
          'token': action.token,
          'userName': decoded.userName,
          'statusText': `You have been successfully signed in as ${decoded.userName}.`
        }
      } catch (e) {
        localStorage.removeItem('token');

        return {
          ...state,
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'userName': null,
          'statusText': `Invalid access token. Please log in again.`
        }
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': `Authentication Error: ${action.status} ${action.statusText}`
      }

    case LOGOUT_USER:
      return {
        ...state,
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been successfully logged out.'
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

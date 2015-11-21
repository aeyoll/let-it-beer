import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,

  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT,

  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from '../constants/ActionTypes';

import $ from 'jquery'
import cookie from 'jquery.cookie'

function saveAuthToken(token) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  $.cookie.set({
    name: 'token',
    value: token,
    expires
  });
}

export function signup(email, password, router) {
  return async (dispatch) => {
    try {
      const { data: { token, user } } = await axios.post('/signup/', {
        email,
        password
      });

      saveAuthToken(token);

      dispatch({ type: LOGIN_SUCCESS, token });
      dispatch({ type: FETCH_PROFILE_SUCCESS, user });
      dispatch({ type: SIGNUP_SUCCESS });
      dispatch({ type: SIGNUP_SUCCESS });

      router.transitionTo('/');
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        error: (error.status === 409)
          ? Error('User with such an email already exists')
          : Error('Unknown error occured :-(. Please, try again later.')
      });
    }
  };
}

export function login(email, password, router) {
  return async (dispatch) => {
    try {
      const { data: { token, user } } = await axios.post('/login/', {
        email,
        password
      });

      saveAuthToken(token);

      dispatch({ type: LOGIN_SUCCESS, token });
      dispatch({ type: FETCH_PROFILE_SUCCESS, user });

      const { query } = router.state.location;
      const redirectTo = (query && query.redirectTo) ? query.redirectTo : '/';

      router.transitionTo(redirectTo);
    } catch (err) {
      let error = (err.status === 401)
        ? Error('Incorrect email or password')
        : Error('Unknown error occured :-(. Please, try again later.');

      dispatch({ type: LOGIN_FAILURE, error });
    }
  };
}

export function logout(router) {
  return dispatch => {
    cookie.unset('token');

    dispatch({ type: LOGOUT });

    router.transitionTo('/login');
  };
}

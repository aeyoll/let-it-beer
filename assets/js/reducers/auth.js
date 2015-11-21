import {
  ROUTER_STATE_CHANGE,

  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  SIGNUP_FAILURE,

  LOGOUT
} from '../constants/ActionTypes';

const initialState = {
  error: null, // last occured error
  token: null,
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.token
      };

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

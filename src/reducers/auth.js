import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  err: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };

    default:
      return state;
  }
}

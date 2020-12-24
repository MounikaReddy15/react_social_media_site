import { APIUrls } from '../helpers/urls';
import { SIGNUP_FAIL, SIGNUP_SUCCESS, SIGNUP_START } from './actionTypes';
import { getFormBody } from '../helpers/utils';

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAIL,
    error,
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

//  const token = <your_token>;

export function signup(name, email, password, confirmPassword) {
  console.log('signup');
  return (dispatch) => {
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Authorization: `Bearer ${token}`, // Remove Auth if not required
      },
      body: getFormBody({
        name,
        password,
        confirm_password: confirmPassword,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          console.log('success');
          localStorage.setItem('token', data.data.token);
          // dispatch an action to save user
          dispatch(signupSuccess(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

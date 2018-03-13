import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';

import store from '../store'
const { dispatch } = store;

import { login as loginRequest, profile as checkRequest } from '../services/sessions';

import {
  SET_ERROR
} from '../reducers/loginForm'

export function login(e) {
  e.preventDefault();
  const { loginForm: payload } = store.getState();

  const hasErrors = validateLoginForm(payload);

  if(hasErrors) {
    return
  }

  loginRequest(payload)
    .success(res => {
      Cookies.set('sessionToken', res.session_token);
      delete res.session_token;
      dispatch({ type: 'USER/SET', user: res });
      browserHistory.push('/transactions')
    })
    .error(res => {
      dispatch({ type: SET_ERROR, errors: { password: res.error } })
    })
}

export function logout() {
  dispatch({type: 'USER/CLEAR'});
  Cookies.remove('sessionToken');
  browserHistory.push('/login')
}

export function check() {
  checkRequest()
    .success(res => {
      delete res.session_token;
      dispatch({ type: 'USER/SET', user: res });
    })
    .error(res => {
      browserHistory.replace('/login')
    })
}

function validateLoginForm(data) {
  let errors = {};
  let hasErrors = false;

  if(data.emailAddress && !data.emailAddress.isEmail()) {
    hasErrors = true;
    errors.emailAddress = 'is not valid email'
  }

  dispatch({ type: SET_ERROR, errors });
  return hasErrors
}

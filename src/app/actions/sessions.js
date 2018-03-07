import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';

import store from '../store'
const { dispatch } = store;

import { login as loginRequest, profile as checkRequest } from '../services/sessions';

export function login(payload) {
  loginRequest(payload)
    .success(res => {
      Cookies.set('sessionToken', res.session_token);
      delete res.session_token;
      dispatch({ type: 'USER/SET', user: res });
      browserHistory.push('/transactions')
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

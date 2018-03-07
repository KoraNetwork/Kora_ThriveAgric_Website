import store from '../store'
import { browserHistory } from 'react-router';

const { dispatch } = store;

export function alertMessage(message, alertType) {
  dispatch({ type: 'GLOBAL/ALERT', message, alertType })
}
export function setLoadingState() {
  dispatch({ type: 'GLOBAL/SET_LOADING' })
}
export function unsetLoadingState() {
  dispatch({ type: 'GLOBAL/UNSET_LOADING' })
}

export function redirect(url, callback) {
  browserHistory.push(url);
  if (typeof callback === 'function') {
    callback()
  }
}

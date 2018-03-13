import store from '../../store'

import {
  HANDLE_CHANGE
} from '../../reducers/loginForm'

const { dispatch } = store;

export function handleChange(event) {
  const { name: key, value } = event.target;

  dispatch({ type: HANDLE_CHANGE, key, value })
}

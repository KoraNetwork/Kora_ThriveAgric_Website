import { browserHistory } from 'react-router';
import store from '../../store'

import {
  SET,
  UPDATE_FILTERS,
  SET_SELECTED,
  SET_VALIDATION_ERRORS,
  HANDLE_CHANGE,
  CLEAR_SELECTED
} from '../../reducers/users'
import {
  get as getUsers,
  getOne as getOneUser,
  upsert as upsertUser,
  destroy as destroyUser
} from '../../services/users';

const { dispatch } = store;

export function fetch() {
  const { filters } = store.getState().users;

  getUsers(filters)
    .success(res => dispatch({ type: SET, users: res.users || [], count: res.count }));
}

export function updateFilters(filters = []) {
  let hash = {};
  filters.forEach(item => Object.keys(item).forEach(key => hash[key] = item[key]));

  dispatch({ type: UPDATE_FILTERS, filters: { ...hash, page: 1 }})
}

export function fetchOne(id) {
  getOneUser(id)
    .success(res => dispatch({ type: SET_SELECTED, user: res }))
}

export function handleChange(event) {
  const valueToChange = { key: event.target.name, value: event.target.value };

  dispatch({ type: HANDLE_CHANGE, valueToChange })
}

export function submitUser(e) {
  e.preventDefault();
  const { selected: user } = store.getState().users;

  let hasErrors = validateUser(user);

  if (hasErrors) {
    return
  }

  upsertUser(user)
    .success(res => browserHistory.push('/users'))
}

export function clearSelected() {
  dispatch({ type: CLEAR_SELECTED });
}

export function deleteUser(id) {
  destroyUser(id)
    .success(res => browserHistory.push('/users'))
}

const validateUser = user => {
  let errors = {};
  let hasErrors = false;

  if (!user.emailAddress) {
    errors.emailAddress = 'is required';
    hasErrors = true
  }
  if (user.emailAddress && !user.emailAddress.isEmail()) {
    errors.emailAddress = 'is not a valid email';
    hasErrors = true
  }
  if (!user.firstName) {
    errors.firstName = 'is required';
    hasErrors = true
  }

  dispatch({ type: SET_VALIDATION_ERRORS, errors });
  return hasErrors
};

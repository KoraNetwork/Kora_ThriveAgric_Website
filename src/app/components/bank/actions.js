import { browserHistory } from 'react-router';
import store from '../../store'

import {
  SET,
  UPDATE_FILTERS,
  SET_SELECTED,
  SET_VALIDATION_ERRORS,
  HANDLE_CHANGE,
  CLEAR_SELECTED
} from '../../reducers/banks'
import {
  get as getBanks,
  getOne as getOneBank,
  upsert as upsertBank,
} from '../../services/banks';

const { dispatch } = store;

export function fetch() {
  const { filters } = store.getState().banks;

  if(window.getBanksTimer) clearTimeout(window.getBanksTimer);

  window.getBanksTimer = setTimeout(function () {
    getBanks(filters)
      .success(res => dispatch({ type: SET, banks: res.banks || [], count: res.count }));
  }, 400)
}

export function updateFilters(filters = []) {
  let hash = {};
  filters.forEach(item => Object.keys(item).forEach(key => hash[key] = item[key]));

  Promise
    .resolve(dispatch({ type: UPDATE_FILTERS, filters: { ...hash, page: 1 }}))
    .then(fetch)
}

export function fetchOne(id) {
  getOneBank(id)
    .success(res => dispatch({ type: SET_SELECTED, bank: res }))
}

export function handleChange(event) {
  const valueToChange = { key: event.target.name, value: event.target.value };

  dispatch({ type: HANDLE_CHANGE, valueToChange })
}

export function submitBank(e) {
  e.preventDefault();
  const { selected: bank } = store.getState().banks;

  let hasErrors = validateBank(bank);

  if (hasErrors) {
    return
  }

  upsertBank(bank)
    .success(res => browserHistory.push('/banks'))
}

export function clearSelected() {
  dispatch({ type: CLEAR_SELECTED });
}

const validateBank = bank => {
  let errors = {};
  let hasErrors = false;

  // if (!user.emailAddress) {
  //   errors.emailAddress = 'Email is required!';
  //   hasErrors = true
  // }
  // if (user.emailAddress && !user.emailAddress.isEmail()) {
  //   errors.emailAddress = 'is not a valid email';
  //   hasErrors = true
  // }
  // if (!user.firstName) {
  //   errors.firstName = 'First Name is required!';
  //   hasErrors = true
  // }

  dispatch({ type: SET_VALIDATION_ERRORS, errors });
  return hasErrors
};

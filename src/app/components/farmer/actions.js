import { browserHistory } from 'react-router';
import store from '../../store'

import {
  SET,
  UPDATE_FILTERS,
  SET_SELECTED,
  SET_VALIDATION_ERRORS,
  HANDLE_CHANGE,
  CLEAR_SELECTED
} from '../../reducers/farmers'
import {
  get    as getFarmers,
  getOne as getOneFarmer,
  upsert as upsertFarmer,
  destroy as destroyFarmer
} from '../../services/farmers';

const { dispatch } = store;

export function fetchAll() {
  const { filters } = store.getState().farmers;

  if(window.getFarmersTimer) clearTimeout(window.getFarmersTimer);

  window.getFarmersTimer = setTimeout(function () {
    getFarmers(filters)
      .success(res => dispatch({ type: SET, farmers: res.users || [], count: res.count }));
  }, 400)
}

export function updateFilters(filters = []) {
  let hash = {};
  filters.forEach(item => Object.keys(item).forEach(key => hash[key] = item[key]));

  Promise
    .resolve(dispatch({ type: UPDATE_FILTERS, filters: { ...hash, page: 1 }}))
    .then(fetchAll)
}

export function fetchOne(id) {
  getOneFarmer(id)
    .success(res => dispatch({ type: SET_SELECTED, farmer: res }))
}

export function handleChange(event) {
  const valueToChange = { key: event.target.name, value: event.target.value };

  dispatch({ type: HANDLE_CHANGE, valueToChange })
}

export function submitFarmer(e) {
  e.preventDefault();
  const { selected: farmer } = store.getState().farmers;

  let hasErrors = validateFarmer(farmer);

  if (hasErrors) {
    return
  }

  upsertFarmer(farmer)
    .success(res => browserHistory.push('/farmers'))
}

export function clearSelected() {
  dispatch({ type: CLEAR_SELECTED });
}

export function deleteFarmer(id) {
  destroyFarmer(id)
    .success(res => browserHistory.push('/farmers'))
}

const validateFarmer = farmer => {
  let errors = {};
  let hasErrors = false;

  if (!farmer.emailAddress) {
    errors.emailAddress = 'Email is required!';
    hasErrors = true
  }
  if (!farmer.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required!';
    hasErrors = true
  }
  if (farmer.emailAddress && !farmer.emailAddress.isEmail()) {
    errors.emailAddress = 'is not a valid email';
    hasErrors = true
  }
  if (farmer.phoneNumber && !farmer.phoneNumber.isValidPhone()) {
    errors.phoneNumber = 'is not a valid phone number';
    hasErrors = true
  }
  if (!farmer.firstName) {
    errors.firstName = 'First Name is required!';
    hasErrors = true
  }
  if (!farmer.question1) {
    errors.question1 = 'Question is required!';
  }
  if (!farmer.question2) {
    errors.question2 = 'Question is required!';
  }
  if (!farmer.answer1) {
    errors.answer1 = 'Answer is required!'
  }
  if (!farmer.answer2) {
    errors.answer2 = 'Answer is required!'
  }

  dispatch({ type: SET_VALIDATION_ERRORS, errors });
  return hasErrors
};

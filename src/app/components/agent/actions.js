import { browserHistory } from 'react-router';
import store from '../../store'

import {
  SET,
  UPDATE_FILTERS,
  SET_SELECTED,
  SET_VALIDATION_ERRORS,
  HANDLE_CHANGE,
  CLEAR_SELECTED
} from '../../reducers/agents'
import {
  get as getAgents,
  getOne as getOneAgent,
  upsert as upsertAgent
} from '../../services/agents';

const { dispatch } = store;

export function fetch() {
  const { filters } = store.getState().agents;

  getAgents(filters)
    .success(res => dispatch({ type: SET, agents: res.users || [], count: res.count }));
}

export function updateFilters(filters = []) {
  let hash = {};
  filters.forEach(item => Object.keys(item).forEach(key => hash[key] = item[key]));

  dispatch({ type: UPDATE_FILTERS, filters: { ...hash, page: 1 }})
}

export function fetchOne(id) {
  getOneAgent(id)
    .success(res => dispatch({ type: SET_SELECTED, agent: res }))
}

export function handleChange(event) {
  const valueToChange = { key: event.target.name, value: event.target.value };

  dispatch({ type: HANDLE_CHANGE, valueToChange })
}

export function submitAgent(e) {
  e.preventDefault();
  const { selected: agent } = store.getState().agents;

  let hasErrors = validateAgent(agent);

  if (hasErrors) {
    return
  }

  upsertAgent(agent)
    .success(res => browserHistory.push('/agents'))
}

export function clearSelected() {
  dispatch({ type: CLEAR_SELECTED });
}

const validateAgent = agent => {
  let errors = {};
  let hasErrors = false;

  if (!agent.emailAddress) {
    errors.emailAddress = 'is required';
    hasErrors = true
  }
  if (!agent.phoneNumber) {
    errors.phoneNumber = 'is required';
    hasErrors = true
  }
  if (agent.emailAddress && !agent.emailAddress.isEmail()) {
    errors.emailAddress = 'is not a valid email';
    hasErrors = true
  }
  if (agent.phoneNumber && !agent.phoneNumber.isValidPhone()) {
    errors.phoneNumber = 'is not a valid phone number';
    hasErrors = true
  }
  if (!agent.firstName) {
    errors.firstName = 'is required';
    hasErrors = true
  }

  dispatch({ type: SET_VALIDATION_ERRORS, errors });
  return hasErrors
};

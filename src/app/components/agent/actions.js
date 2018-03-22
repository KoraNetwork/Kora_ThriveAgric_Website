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
  upsert as upsertAgent,
  destroy as destroyAgent
} from '../../services/agents';

const { dispatch } = store;

export function fetch() {
  const { filters } = store.getState().agents;

  if(window.getAgentsTimer) clearTimeout(window.getAgentsTimer);

  window.getAgentsTimer = setTimeout(function () {
    getAgents(filters)
      .success(res => dispatch({ type: SET, agents: res.users || [], count: res.count }));
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

export function deleteAgent(id) {
  destroyAgent(id)
    .success(res => browserHistory.push('/agents'))
}

const validateAgent = agent => {
  let errors = {};
  let hasErrors = false;

  if (!agent.emailAddress) {
    errors.emailAddress = 'Email is required!';
    hasErrors = true
  }
  if (!agent.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required!';
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
    errors.firstName = 'First Name is required!';
    hasErrors = true
  }
  if (!agent.bankName) {
    errors.bankName = 'Bank Name is required!';
    hasErrors = true
  }
  if (agent.bankName.lenght > 32){
    errors.bankName = 'Bank Name is required!';
    hasErrors = true
  }
  if (!agent.bankRoutingNumber) {
    errors.bankRoutingNumber = 'Bank Routing Number is required!'
    hasErrors = true
  }
  if (!agent.acountNumber) {
    errors.acountNumber = 'Acount Number is reqired!'
    hasErrors = true
  }
  if (!agent.question1) {
    errors.question1 = 'Question is required!';
  }
  if (!agent.question2) {
    errors.question2 = 'Question is required!';
  }
  if (!agent.answer1) {
    errors.answer1 = 'Answer is required!'
  }
  if (!agent.answer2) {
    errors.answer2 = 'Answer is required!'
  }

  dispatch({ type: SET_VALIDATION_ERRORS, errors });
  return hasErrors
};

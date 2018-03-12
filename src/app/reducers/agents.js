const initialState = {
  items: [],
  filters: { page: 1, perPage: 10, role: 'agent' },
  selected: {
    id: null,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    phoneStatus: '',
    phoneConfirmationCode: '',
    address: '',
    bankName: '',
    bankRoutingNumber: '',
    acountNumber: '',
    bisinessName: '',
    bisinessAddress: '',
    agentStatus: '',
    securityQuestions: [],
    errors: {}
  },
  count: 0
};

export const SET = 'AGENTS/SET';
export const SET_SELECTED = 'AGENTS/SET_SELECTED';
export const CLEAR = 'AGENTS/CLEAR';
export const UPDATE_FILTERS = 'AGENTS/UPDATE_FILTERS';
export const SET_VALIDATION_ERRORS = 'AGENTS/SET_VALIDATION_ERRORS';
export const HANDLE_CHANGE = 'AGENTS/HANDLE_CHANGE';
export const CLEAR_SELECTED = 'AGENTS/CLEAR_SELECTED';

export default function (state = initialState, action) {

  switch (action.type) {
    case SET:
      return { ...state, items: action.agents, count: action.count };

    case CLEAR:
      return { ...state, items: [] };

    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.filters } };

    case SET_SELECTED:
      return { ...state, selected: { ...state.selected, ...action.agent } };

    case SET_VALIDATION_ERRORS:
      return { ...state, selected: { ...state.selected, errors: action.errors } };

    case HANDLE_CHANGE:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.valueToChange.key]: action.valueToChange.value,
          errors: {
            ...state.selected.errors,
            [action.valueToChange.key]: null
          }
        }
      };

    case CLEAR_SELECTED:
      return { ...state, selected: initialState.selected };

    default:
      return state
  }
}

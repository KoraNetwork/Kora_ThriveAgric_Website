const initialState = {
  items: [],
  filters: {
    page: 1,
    perPage: 10,
    role: 'farmer',
    emailAddress: ''
  },
  selected: {
    id: null,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    phoneStatus: '',
    phoneConfirmationCode: '',
    address: '',
    payrollStatus: '',
    securityQuestions: [],
    errors: {}
  },
  count: 0
};

export const SET = 'FARMERS/SET';
export const SET_SELECTED = 'FARMERS/SET_SELECTED';
export const CLEAR = 'FARMERS/CLEAR';
export const UPDATE_FILTERS = 'FARMERS/UPDATE_FILTERS';
export const SET_VALIDATION_ERRORS = 'FARMERS/SET_VALIDATION_ERRORS';
export const HANDLE_CHANGE = 'FARMERS/HANDLE_CHANGE';
export const CLEAR_SELECTED = 'FARMERS/CLEAR_SELECTED';

export default function (state = initialState, action) {

  switch (action.type) {
    case SET:
      return { ...state, items: action.farmers, count: action.count };

    case CLEAR:
      return { ...state, items: [] };

    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.filters } };

    case SET_SELECTED:
      return { ...state, selected: { ...state.selected, ...action.farmer } };

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

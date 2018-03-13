const initialState = {
  items: [],
  filters: { page: 1, perPage: 10, role: 'user' },
  selected: {
    id: null,
    firstName: '',
    lastName: '',
    emailAddress: '',
    userType: '',
    errors: {}
  },
  count: 0
};

export const SET = 'USERS/SET';
export const SET_SELECTED = 'USERS/SET_SELECTED';
export const CLEAR = 'USERS/CLEAR';
export const UPDATE_FILTERS = 'USERS/UPDATE_FILTERS';
export const SET_VALIDATION_ERRORS = 'USERS/SET_VALIDATION_ERRORS';
export const HANDLE_CHANGE = 'USERS/HANDLE_CHANGE';
export const CLEAR_SELECTED = 'USERS/CLEAR_SELECTED';

export default function (state = initialState, action) {

  switch (action.type) {
    case SET:
      return { ...state, items: action.users, count: action.count };

    case CLEAR:
      return { ...state, items: [] };

    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.filters } };

    case SET_SELECTED:
      return { ...state, selected: { ...state.selected, ...action.user } };

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

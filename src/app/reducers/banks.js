const initialState = {
  items: [],
  filters: { page: 1, perPage: 10 },
  selected: {
    id: null,
    bankName: '',
    bankRoutingNumber: '',
    acountNumber: '',
    errors: {}
  },
  count: 0
};

export const SET = 'BANKS/SET';
export const SET_SELECTED = 'BANKS/SET_SELECTED';
export const CLEAR = 'BANKS/CLEAR';
export const UPDATE_FILTERS = 'BANKS/UPDATE_FILTERS';
export const SET_VALIDATION_ERRORS = 'BANKS/SET_VALIDATION_ERRORS';
export const HANDLE_CHANGE = 'BANKS/HANDLE_CHANGE';
export const CLEAR_SELECTED = 'BANKS/CLEAR_SELECTED';

export default function (state = initialState, action) {

  switch (action.type) {
    case SET:
      return { ...state, items: action.banks, count: action.count };

    case CLEAR:
      return { ...state, items: [] };

    case UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.filters } };

    case SET_SELECTED:
      return { ...state, selected: { ...state.selected, ...action.bank } };

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

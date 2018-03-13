const initialState = {
  emailAddress: '',
  password: '',
  passwordIsVisible: false,
  errors: {}
};

export const SET_ERROR = 'LOGIN/SET_ERROR';
export const CLEAR_ERROR = 'LOGIN/CLEAR_ERROR';
export const HANDLE_CHANGE = 'LOGIN/HANDLE_CHANGE';

export default function (state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE:
      return { ...state, [action.key]: action.value, errors: { ...state.errors, [action.key]: '' } };

    case SET_ERROR:
      return { ...state, errors: { ...state.errors, ...action.errors } };

    case CLEAR_ERROR:
      return { ...state, errors: {} };

    default:
      return state
  }
}

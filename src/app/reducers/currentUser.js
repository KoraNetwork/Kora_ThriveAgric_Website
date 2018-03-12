const initialState = {
  id: null,
  emailAddress: '',
  fullName: '',
  password: '',
  passwordConfirmation: '',
  errors: '',
};

export default function (state = initialState, action) {

  switch (action.type) {
    case 'USER/SET':
      return { ...state, ...action.user };

    case 'USER/CLEAR':
      return initialState;

    case 'USER/ERROR':
      return {...state, errors: action.error};

    default:
      return state
  }
}

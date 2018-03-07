const initialState = {
  id: null,
  emailAddress: '',
  fullName: '',
  password: '',
  passwordConfirmation: '',
};

export default function (state = initialState, action) {

  switch (action.type) {
    case 'USER/SET':
      return { ...state, ...action.user };

    case 'USER/CLEAR':
      return initialState;

    default:
      return state
  }
}

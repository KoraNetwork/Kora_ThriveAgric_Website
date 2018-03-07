const initialState = {
  drawerOpened: false,
  alertMessage: '',
  alertType: ''
};

export default function (state = initialState, action) {

  switch (action.type) {

    case 'GLOBAL/SET_LOADING':
      return {
        ...state,
        isLoading: true
      };

    case 'GLOBAL/UNSET_LOADING':
      return {
        ...state,
        isLoading: false
      };

    case 'GLOBAL/ALERT':
      return {
        ...state,
        alertMessage: action.message,
        alertType: action.alertType || state.alertType
      };

    default:
      return state
  }

}

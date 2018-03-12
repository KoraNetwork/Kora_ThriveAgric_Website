import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';
import farmers from './farmers'

const rootReducer = combineReducers({
  currentUser,
  farmers,
  global
});

export default rootReducer;

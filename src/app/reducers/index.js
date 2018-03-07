import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  global,
  currentUser
});

export default rootReducer;

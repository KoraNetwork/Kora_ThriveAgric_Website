import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';
import farmers from './farmers'
import agents from './agents'

const rootReducer = combineReducers({
  currentUser,
  farmers,
  agents,
  global
});

export default rootReducer;

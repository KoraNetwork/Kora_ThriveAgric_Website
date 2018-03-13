import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';
import farmers from './farmers'
import agents from './agents'
import users from './users'

const rootReducer = combineReducers({
  currentUser,
  farmers,
  agents,
  users,
  global
});

export default rootReducer;

import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';
import farmers from './farmers';
import agents from './agents';
import users from './users';
import banks from './banks';
import loginForm from './loginForm';

const rootReducer = combineReducers({
  currentUser,
  farmers,
  agents,
  users,
  banks,
  global,
  loginForm,
});

export default rootReducer;

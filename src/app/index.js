import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/login/index';
import ChangePass from './components/change-password';
import ForgotPass from './components/forgot-password';

import Transactions from './components/transaction/index';
import Transaction from './components/transaction/show';

import Farmers from './components/farmer/index';
import FarmerForm from './components/farmer/form';
import FarmerDelete from './components/farmer/delete';

import Agents from './components/agent/index';
import AgentForm from './components/agent/form';
import AgentDelete from './components/agent/delete';

import Users from './components/user/index';
import UserForm from './components/user/form';
import UserDelete from './components/user/delete';

import './components/bundle.scss';
import './utils';
import store from './store'

import {check as checkSession} from './actions/sessions';

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App} onEnter={checkSession}>
        <Route path="/login" component={Login} />
        <Route path="/change-password" component={ChangePass} />
        <Route path="/forgot_password" component={ForgotPass} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/transaction/:id" component={Transaction} />
        <Route path="/farmers">
          <IndexRoute name="farmers" component={Farmers} />
          <Route name="farmers-new"    path="new"        component={FarmerForm} />
          <Route name="farmers-edit"   path=":id"        component={FarmerForm} />
          <Route name="farmers-delete" path=":id/delete" component={FarmerDelete} />
        </Route>
        <Route path="/agents">
          <IndexRoute name="agents" component={Agents} />
          <Route name="agents-new"  path="new" component={AgentForm} />
          <Route name="agents-edit" path=":id" component={AgentForm} />
          <Route name="agents-delete" path=":id/delete" component={AgentDelete} />
        </Route>
        <Route path="/users">
          <IndexRoute name="users" component={Users} />
          <Route name="users-new"  path="new" component={UserForm} />
          <Route name="users-edit" path=":id" component={UserForm} />
          <Route name="users-delete" path=":id/delete" component={UserDelete} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));

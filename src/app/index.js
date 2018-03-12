import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/login/index';
import ChangePass from './components/change-password';

import Transactions from './components/transaction/index';
import Transaction from './components/transaction/show';

import Farmers from './components/farmer/index';
import FarmerForm from './components/farmer/form';
import FarmerDelete from './components/farmer/delete';
import Agents from './components/agent/index';
import Users from './components/user/index';

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
        <Route path="/transactions" component={Transactions} />
        <Route path="/transaction/:id" component={Transaction} />
        <Route path="/farmers">
          <IndexRoute name="farmers" component={Farmers} />
          <Route name="farmers-new"    path="new"        component={FarmerForm} />
          <Route name="farmers-edit"   path=":id"        component={FarmerForm} />
          <Route name="farmers-delete" path=":id/delete" component={FarmerDelete} />
        </Route>
        <Route path="/agents" component={Agents} />
        <Route path="/users" component={Users} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));

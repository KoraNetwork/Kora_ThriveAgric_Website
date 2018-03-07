import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/login/index';

import Transactions from './components/transaction/index';

import Farmers from './components/farmer/index';

import Agents from './components/agent/index';

import Users from './components/user/index';



import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/farmers" component={Farmers} />
        <Route path="/agents" component={Agents} />
        <Route path="/users" component={Users} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));

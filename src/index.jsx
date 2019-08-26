import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './components/Login/';
// import Signup from './components/Signup/';
import './index.scss';

import { tabsReducer } from './reducers';
import App from './App';

const store = createStore(tabsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App >
      </App> 
      {/* <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} /> */}
    </Router>
  </Provider>,
  document.getElementById('root'),
);

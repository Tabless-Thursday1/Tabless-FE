import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';
import FormikLoginForm from './components/Login';
import FormikSignupForm from './components/Signup';
// import PrivateRoute from './utils/PrivateRoute';
import NavTab from './components/NavBarTabs/NavTabLinks/NavTab';
import Tab1 from './components/NavBarTabs/Tab1/tab1';
import Tab2 from './components/NavBarTabs/Tab2/tab2';
import Tab3 from './components/NavBarTabs/Tab3/tab3';
import Tab4 from './components/NavBarTabs/Tab4/tab4';

const App = () => (
  <div className="app">
    <NavTab />
    <Home />
    <Route exact path="/" component={Home} />
    <Route path="/tab1" component={Tab1} />
    <Route path="/tab2" component={Tab2} />
    <Route path="/tab3" component={Tab3} />
    <Route path="/tab4" component={Tab4} />
    <ul>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Route path="/login" component={FormikLoginForm} />
      <Route path="/signup" component={FormikSignupForm} />
    </ul>
  </div>
);

export default App;
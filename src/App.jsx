import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';

// import PrivateRoute from './utils/PrivateRoute';
import FormikMainForm from './components/MainForm'
import FormikLoginForm from './components/LoginForm';
import FormikSignupForm from './components/SignupForm';
import NavTab from './components/NavBarTabs/NavTabLinks';
import Tab1 from './components/NavBarTabs/Tab1/tab1';
import Tab2 from './components/NavBarTabs/Tab2/tab2';
import Tab3 from './components/NavBarTabs/Tab3/tab3';
import Tab4 from './components/NavBarTabs/Tab4/tab4';
import WelcomePage from './components/NavBarTabs/HomePage/HomePage';
import MainForm from './components/MainForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={NavTab} />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/tab1" component={FormikLoginForm} />
        <Route path="/tab2" component={FormikSignupForm} />
        <Route path="/tab3" component={Home} />
        <Route path="/tab4" component={Tab4} />
        <Route path="/edit/:tabId" render={() => <FormikMainForm edit />} />
        <Route path="/add" component={FormikMainForm} />
        {/* <ul>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Route path="/login" component={FormikLoginForm} />
          <Route path="/signup" component={FormikSignupForm} />
        </ul> */}
      </div>
    </Router>
  );
}

export default App;

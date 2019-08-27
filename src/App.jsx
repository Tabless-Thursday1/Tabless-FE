import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';
import FormikLoginForm from './components/LoginForm';
import FormikSignupForm from './components/SignupForm';
import NavTab from './components/NavBarTabs/NavTabLinks';
import Tab1 from './components/NavBarTabs/Tab1/tab1';
import Tab2 from './components/NavBarTabs/Tab2/tab2';
import Tab3 from './components/NavBarTabs/Tab3/tab3';
import Tab4 from './components/NavBarTabs/Tab4/tab4';
import WelcomePage from './components/NavBarTabs/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="app">
        <NavTab />
        <FormikLoginForm />
        <FormikSignupForm />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
        <Route path="/tab4" component={Tab4} />
      </div>
    </Router>
  );
}

export default App;

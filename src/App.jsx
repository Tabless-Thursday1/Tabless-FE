import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';

// import PrivateRoute from './utils/PrivateRoute';
import FormikMainForm from './components/MainForm/MainForm';
// import NewTabButton from './components/NavBarTabs/NavTabLinks';
import FormikLoginForm from './components/LoginForm';
import FormikSignupForm from './components/SignupForm';
import NavTab from './components/NavBarTabs/NavTabLinks';
// import Tab1 from './components/NavBarTabs/Tab1/tab1';
// import Tab2 from './components/NavBarTabs/Tab2/tab2';
// import Tab3 from './components/NavBarTabs/Tab3/tab3';
// import Tab4 from './components/NavBarTabs/NavTabLinks/NavTab';
import WelcomePage from './components/NavBarTabs/HomePage/HomePage';
import MainForm from './components/MainForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={NavTab} />
        {/* <Route path="/home" component={NewTabButton} /> */}
        <Route path="/edit/:tabId" render={() => <FormikMainForm edit />} />
        <Route path="/add" component={FormikMainForm} />
      </div>
    </Router>
  );
}

export default App;

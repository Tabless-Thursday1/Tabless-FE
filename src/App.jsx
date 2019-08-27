import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Home from './components/Home/';
import ExampleComponent from './components/ExampleComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikLoginForm from './components/Login';
import FormikSignupForm from './components/Signup';
import PrivateRoute from './utils/PrivateRoute';
import NavTab from './Components/NavBar_Tabs/NavTab_Links/NavTab';
import Tab1 from './Components/NavBar_Tabs/Tab1/tab1';
import Tab2 from './Components/NavBar_Tabs/Tab2/tab2';
import Tab3 from './Components/NavBar_Tabs/Tab3/tab3';
import Tab4 from './Components/NavBar_Tabs/Tab4/tab4';

function App() {
  return (
    <Router>
      <div className="app">
        <NavTab />
        <Home />
        <Route exact path="/" component={Home} />
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
        <Route path="/tab4" component={Tab4} /> 
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

import React from 'react';

import './App.scss';
import logo from './logo.svg';
import Home from "./components/Home/";
import ExampleComponent from './components/ExampleComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikLoginForm from './components/Login'
import FormikSignupForm from './components/Signup'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
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

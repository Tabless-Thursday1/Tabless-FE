import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from "./components/Home/";
import ExampleComponent from './components/ExampleComponent';
import FormikLoginForm from './components/Login'
import FormikSignupForm from './components/Signup'
import PrivateRoute from './utils/PrivateRoute'
// import NavTab from "./Components/NavTab";
// import Tab1 from "./Components/TabComponents/tab1";
// import Tab2 from "./Components/TabComponents/tab2";
// import Tab3 from "./Components/TabComponents/tab3";
// import Tab4 from "./Components/TabComponents/tab4";
// import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <Router>
    <div className="app">
      <Home />
      {/* <NavTab/>
      <Home />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/tab1" component={Tab1}/>
      <Route path="/tab2" component={Tab2}/>
      <Route path="/tab3" component={Tab3}/>
      <Route path="/tab4" component={Tab4}/>  */}
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

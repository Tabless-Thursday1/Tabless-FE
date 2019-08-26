import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import NavTab from "./Components/NavTab";
import Tab1 from "./Components/TabComponents/tab1";
import Tab2 from "./Components/TabComponents/tab2";
import Tab3 from "./Components/TabComponents/tab3";
import Tab4 from "./Components/TabComponents/tab4";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <div className="App">
    <NavTab/>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/tab1" component={Tab1}/>
      <Route path="/tab2" component={Tab2}/>
      <Route path="/tab3" component={Tab3}/>
      <Route path="/tab4" component={Tab4}/> 
    </div>
  );
}

export default App;

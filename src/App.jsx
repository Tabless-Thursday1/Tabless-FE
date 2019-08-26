import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from "./components/NavBar_Tabs/HomePage/home_page";
import Tab1 from "./components/NavBar_Tabs/Tab1/tab1";
import Tab2 from "./components/NavBar_Tabs/Tab2/tab2";
import Tab3 from "./components/NavBar_Tabs/Tab3/tab3";
import Tab4 from "./components/NavBar_Tabs/Tab4/tab4";

function App() {
  return (
    <div className="App">
    <NavTab/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/tab1" component={Tab1}/>
      <Route path="/tab2" component={Tab2}/>
      <Route path="/tab3" component={Tab3}/>
      <Route path="/tab4" component={Tab4}/> 
    </div>
  );
}

export default App;

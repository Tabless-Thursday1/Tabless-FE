import React from 'react';
import { Tabs, Icon, Button } from 'antd';
import { Route, NavLink } from 'react-router-dom';
import LoginForm from '../../LoginForm';
import SignupForm from '../../SignupForm';
import './NavTab.scss';
import Home from '../../Home/Home';
import NewTabForm from '../../AddTabButton/NewTabButton';


function NavTab(props) {
  const { TabPane } = Tabs;

  function callback(key) {
    props.history.push(`/${key}`);
  }

  return (
    <div className="nav-wrapper">
      <Tabs activeKey={props.location.pathname.substring(1)} onTabClick={callback}>
        <TabPane tab="Home" key="home" className="tab home-tab">
          <Route path="/home" component={Home} />
          PlaceHolder
          <NavLink className="tab" to="/add">
            <Button type="primary" className="tab tab-btn">Add A Tab</Button>
          </NavLink>
        </TabPane>
        <TabPane tab="Log In" key="tab1" className="tab">
          <Route path="/tab1" component={LoginForm} />
        </TabPane>
        <TabPane tab="Sign Up" key="tab2" className="tab">
          <Route path="/tab2" component={SignupForm} />
        </TabPane>
        {/* <TabPane tab="Add A Tab" key="newtab" className="tab" /> */}
        <TabPane tab="About" key="3" className="tab">
          <h3>About Tabless Thursday</h3>
          <p>
            People often have a million tabs up and lose track of what they were doing.
            This website lets you organize
            them in to-do lists and make a
            note of why it was important.
            Makes it easy to pick up where
            you left off.
          </p>
        </TabPane>
        <TabPane tab="Meet The Team" key="team" className="tab">
          <div className="meet-the-team team">
            <h2>WEB UI DEVELOPER</h2>
            <ul>
              <li>Mason Roberts</li>
              <li>Uzias Rivera</li>
              <li>Jordan Athey</li>
            </ul>
            <h2>FRONTEND DEVELOPER (UNIT 2 WEB)</h2>
            <ul>
              <li>Jordan Doan</li>
              <li>Benjamin Griffin</li>
            </ul>
            <h2>WEB BACKEND DEVELOPER</h2>
            <ul>
              <li>Zachary Imbriaco</li>
            </ul>
            <h2>FRONTEND FRAMEWORK DEVELOPER (UNIT 3 WEB)</h2>
            <ul>
              <li>Jeff Butler</li>
              <li>Patrick Baldwin</li>
            </ul>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default NavTab;

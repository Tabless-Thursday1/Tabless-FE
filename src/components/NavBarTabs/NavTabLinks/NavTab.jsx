import React from 'react';
import { Tabs, Icon } from 'antd';

import './NavTab.scss';


function NavTab(props) {
  const { TabPane } = Tabs;

  function callback(key) {
    props.history.push(`/${key}`);
  }

  return (
    <div className="nav-wrapper">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Your Tabs" key="tab1" className="your-tabs your">
          <h3>We can route our tabs here.</h3>
        </TabPane>
        <TabPane tab="Welcome" key="tab2" className="welcome-tab welcome">
          <h3>Welcome to Tabless Thursday</h3>
          <p>Here at Tabless Thursday we strive to make your browser look and feel more organized.</p>
        </TabPane>
        <TabPane tab="About" key="3" className="about-tab about">
          <h3>About Tabless Thursday</h3>
          <p>
            People often have a million tabs up and lose track of what they were doing.
            This website lets you organize them in to-do lists and make a note of why it was important.
            Makes it easy to pick up where you left off.
          </p>
        </TabPane>
        <TabPane tab="Meet The Team" key="4">
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

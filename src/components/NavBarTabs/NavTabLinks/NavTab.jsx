import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

import './NavTab.scss';


function NavTab() {
  return (
    <div>
      <div className="nav-wrapper wrapper">
        <NavLink exact to="/" activeClassName="tab welcome">
          <h1>
              Tabless Thursday
            <Icon type="folder-open" theme="twoTone" />
          </h1>
        </NavLink>
        <NavLink to="/tab1" activeClassName="tab">Tab 1</NavLink>
        <NavLink to="/tab2" activeClassName="tab">Tab 2</NavLink>
        <NavLink to="/tab3" activeClassName="tab">Tab 3</NavLink>
        <NavLink to="/tab4" activeClassName="tab">Tab 4</NavLink>
      </div>
    </div>
  );
}
export default NavTab;

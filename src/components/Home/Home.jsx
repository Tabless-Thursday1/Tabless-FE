import React, { useState, useEffect } from 'react';
import { Collapse, Button } from 'antd';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import './Home.scss';

import group from './Group';
import { dummyData } from '../../dummyData';

const Home = () => {
  /* Object shape: REQUIRES GroupING ALL DATA
    category = {
        name:
        tabs: [
            {
                url
                private
                description
                categories
            },
            ...
        ]
    }
    */
  const [newGroup, setGroup] = useState([]);

  useEffect(() => {
    const groupedCategories = group(dummyData);
    setGroup(groupedCategories);
    // axios.get('url placeholder')
    //   .then((res) => {
    //     const groupedCategories = group(dummyData);
    //     setGroup(groupedCategories);
    //   })
    //   .catch((err) => {
    //   console.log(err);
    //   });
  }, []);
  const { Panel } = Collapse;

  if (newGroup.length === 0) {
    return (
      <div className="tab-container">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (newGroup.length === 1 && newGroup[0].tabs.length === 0) {
    return (
      <div className="tab-container">
        <div>
          <NavLink className="tab" to="/add">
            <Button type="primary" className="tab-btn">Add A Tab</Button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="tab-container">
      <div className="tabs">
        {newGroup.map((category) => (
          <Collapse className="category-card">
            <div className="title">
              <h2>{category.name}</h2>
              <NavLink to="/add"><Button type="link" icon="plus" size="small" className="add">Add new tab</Button></NavLink>
            </div>
            {category.tabs.map((tab) => (
              <Panel header={tab.name} key={tab.name} className="tab-link">
                <div className="panel-text">
                  <p className="tab-link">
                    Description:
                    {` ${tab.description}`}
                  </p>
                  <p className="tab-link"><a href={tab.url} rel="noopener noreferrer" target="_blank">URL</a></p>
                  <Button type="link" icon="edit" size="small" className="edit tab-link">Edit</Button>
                  <Button type="danger" icon="delete" size="small" className="tab-link">Delete</Button>
                </div>
              </Panel>
            ))}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default Home;

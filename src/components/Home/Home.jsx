import React, { useState, useEffect } from 'react';
import { Collapse, Button } from 'antd';

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
  }, []);
  const { Panel } = Collapse;

  if (newGroup.length === 0) {
    return (<h1>Loading...</h1>);
  }
  
  return (
    <div className="tabs">
      {newGroup.map((category) => (
        <Collapse className="category-card">
          <div className="title">
            <h2>{category.name}</h2>
            <Button type="link" icon="plus" size="small" className="add">Add new tab</Button>
          </div>
          {category.tabs.map((tab) => (
            <Panel header={tab.name} key={tab.name}>
              <div className="panel-text">
                <p>
                  Description:
                  {` ${tab.description}`}
                </p>
                <p><a href={tab.url} rel="noopener noreferrer" target="_blank">URL</a></p>
                <Button type="link" icon="edit" size="small" className="edit">Edit</Button>
                <Button type="danger" icon="delete" size="small">Delete</Button>
              </div>
            </Panel>
          ))}
        </Collapse>
      ))}
    </div>

  );
};

export default Home;

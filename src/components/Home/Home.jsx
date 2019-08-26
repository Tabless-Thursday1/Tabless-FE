/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Collapse, Button } from 'antd';
import './Home.scss';
import { sortedCategories, sort } from './Sort';

const Home = () => {
  /* Object shape: REQUIRES SORTING ALL DATA
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
  const [newSort, setSort] = useState([]);
  const dummyData = [
    {
      name: 'Google',
      url: 'https://www.google.com',
      private: false,
      description: "it's google",
      categories: [
        'search',
        'research',
      ],
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      private: false,
      description: "it's facebook",
      categories: [
        'search',
        'chicken',
      ],
    },
  ];

  useEffect(() => {
    sort(dummyData);
    setSort(sortedCategories);
  }, []);
  const { Panel } = Collapse;

  if (newSort.length === 0) {
    return (<h1>Loading...</h1>);
  }
  return (
    <div className="tabs">
      {newSort.map((category) => (
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
                  {tab.description}
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

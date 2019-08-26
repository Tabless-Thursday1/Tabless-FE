import React, {useState, useEffect} from "react";
import { Collapse, Button} from 'antd';
import "./Home.scss";

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
    const dummyData = [
        {
          name: "Google",
          url: 'https://www.google.com',
          private: false,
          description: "it's google",
          categories: [
            'search',
            'research',
          ],
        },
        {
            name: "Facebook",
            url: 'https://www.facebook.com',
            private: false,
            description: "it's facebook",
            categories: [
              'search',
              'chicken'
            ],
        },
      ];

    let [newSort, setSort] = useState([]);
    let sortedCategories = [];
    useEffect(() => {
        const sort = (tabs) => {
            tabs.forEach((tab) => {
                tab.categories.forEach((category) => {
                    let found = false;
                    let foundIndex = 0;

                    sortedCategories.forEach((indexedCats, index) => {
                        if (indexedCats.name === category) {
                            found = true;
                            foundIndex = index;
                            return;
                        }
                    });
                    if (found) {
                        //setSort([...sortedCategories, {name: category, tabs: newTabs}]);
                        sortedCategories[foundIndex].tabs.push(tab);
                    } else {
                        //setSort([...sortedCategories, {name: category, tabs: [tab]}]);
                        sortedCategories.push({
                            name: category,
                            tabs: [tab]
                        });
                    }
                });
            });
        }
        sort(dummyData);
        setSort(sortedCategories);

    }, [])

    const { Panel } = Collapse;
    if (newSort.length === 0) {
        return(<h1>Loading...</h1>)
    }
    return (
            <div className="tabs">
            {newSort.map((category) => 
                <Collapse className="category-card">
                <div className="title">
                    <h2>{category.name}</h2>
                    <Button type="link" icon="plus" size="small" className="add">Add new tab</Button>
                </div>
                {category.tabs.map((tab,index) => 
                    <Panel header={tab.name} key={index}>
                        <div className="panel-text">
                            <p>Description: {tab.description}</p>
                            <p><a href={tab.url} rel="noopener noreferrer" target="_blank">URL</a></p>
                            <Button type="link" icon="edit" size="small" className="edit">Edit</Button>
                            <Button type="danger" icon="delete" size="small">Delete</Button>
                        </div>
                        </Panel>
                )}
                </Collapse>
            )}
            </div>

    )
}

export default Home;
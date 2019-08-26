import React, {useState, useEffect} from "react";
import { Collapse } from 'antd';
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
          url: 'www.google.com',
          private: false,
          description: "it's google",
          categories: [
            'search',
            'research',
          ],
        },
        {
            url: 'www.facebook.com',
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
                        if (indexedCats.name == category) {
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
    let text = "hi";
    if (newSort.length == 0) {
        return(<h1>Loading...</h1>)
    }
    return (
            <div className="tabs">
            {newSort.map((category) => 
                <Collapse className="category-card">
                <h2>{category.name}</h2>
                {category.tabs.map((tab,index) => 
                    <Panel header={tab.url} key={index}><p>{tab.description}</p></Panel>
                )}
                </Collapse>
            )}
            </div>

    )
}

export default Home;
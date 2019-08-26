import React, {useState, useEffect} from "react";
import { Collapse } from 'antd';

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
              'search'
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
                        }
                    });
                    if (found) {
                        let newTabs = sortedCategories[foundIndex].tabs.push(tab);
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
    if (newSort.length == 0) {
        return(<h1>Loading...</h1>)
    }
    return (
            <div>
            {newSort.map((category) => 
                <Collapse>
                {category.tabs.map((tab) => 
                    <Panel header={category.name}><p>{tab.description}</p></Panel>
                )}
                </Collapse>
            )}
            </div>

    )
}

export default Home;
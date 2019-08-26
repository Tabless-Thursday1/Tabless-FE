import React from "react";


const Home = () => {
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
    let mergedData = dummyData;
    let sortedCategories = [];
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
                    sortedCategories[foundIndex].tabs.push(tab);
                } else {
                    sortedCategories.push({
                        name: category,
                        tabs: [tab]
                    });
                }
            });
        });
    }
    sort(mergedData);

   return (
       <div>I am a home page!</div>
   )
}

export default Home;
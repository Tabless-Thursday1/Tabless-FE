/* eslint-disable linebreak-style */
const sortedCategories = [];
const sort = (tabs) => {
  tabs.forEach((tab) => {
    tab.categories.forEach((category) => {
      let found = false;
      let foundIndex = 0;

      sortedCategories.forEach((indexedCats, index) => {
        if (indexedCats.name === category) {
          found = true;
          foundIndex = index;
          return null;
        }
      });
      if (found) {
        // setSort([...sortedCategories, {name: category, tabs: newTabs}]);
        sortedCategories[foundIndex].tabs.push(tab);
      } else {
        // setSort([...sortedCategories, {name: category, tabs: [tab]}]);
        sortedCategories.push({
          name: category,
          tabs: [tab],
        });
      }
    });
  });
};

export { sortedCategories, sort };

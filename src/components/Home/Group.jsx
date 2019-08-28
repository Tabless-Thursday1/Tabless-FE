const group = (tabs) => tabs.reduce((groupedCategories, tab) => {
  if (tab.categories.length == 0) {
    groupedCategories[0].tabs.push(tab);
  } else {
    tab.categories.forEach((category) => {
      const foundIndex = groupedCategories
        .findIndex((indexedCats) => indexedCats.name === category);
      if (foundIndex >= 0) {
        groupedCategories[foundIndex].tabs.push(tab);
      } else {
        groupedCategories.push({
          name: category,
          tabs: [tab],
        });
      }
    });
  }
  return groupedCategories;
}, [{ name: 'no category', tabs: [] }]);

export default group;

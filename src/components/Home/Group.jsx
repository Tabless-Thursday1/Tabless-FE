const group = (tabs) => tabs.reduce((groupedCategories, tab) => {
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
  return groupedCategories;
}, []);

export default group;

export const filterObject = ({ sourceObject, filter }) => Object
  .keys(filter)
  .reduce((acc, key) => {
    acc[key] = sourceObject[key];
    return acc;
  }, {});

export default filterObject;

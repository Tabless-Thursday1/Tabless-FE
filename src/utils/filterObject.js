export function filterObject({ sourceObject, filter }) {
  return (Object
    .keys(filter)
    .reduce((acc, key) => {
      acc[key] = sourceObject[key];
      return acc;
    }, {}));
}

export default filterObject;

const hasValuesFromArray = (set, array) => {
  const newSet = new Set(array);
  return set.isSupersetOf(newSet);
};

export default hasValuesFromArray;

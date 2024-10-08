const hasValuesFromArray = (set, array) => {
  const newSet = new Set(array);
  return newSet.isSubsetOf(set);
};

export default hasValuesFromArray;

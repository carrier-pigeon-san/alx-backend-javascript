export default function appendToEachArrayValue(array, appendString) {
  const array2 = [...array];
  for (const element of array) {
    const index = array.indexOf(element);
    array2[index] = appendString + element;
  }

  return array2;
}

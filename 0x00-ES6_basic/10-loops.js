export default function appendToEachArrayValue(array, appendString) {
  const array2 = [...array];
  for (const element of array2) {
    const index = array2.indexOf(element);
    array2[index] = appendString + element;
  }

  return array2;
}

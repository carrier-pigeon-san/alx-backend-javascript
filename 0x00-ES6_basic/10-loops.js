export default function appendToEachArrayValue(array, appendString) {
  const array2 = [...array];
  for (const [index, element] of array2.entries()) {
    array2[index] = appendString + element;
  }

  return array2;
}

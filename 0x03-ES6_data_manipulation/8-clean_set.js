export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return ''; // Return empty string if startString is invalid
  }

  const newArray = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newArray.push(value.slice(3));
    }
  });
  return newArray.join('-');
}
const Utils = {
  // A utility method that adds, subtracts, or divides two numbers
  // based on the operator passed in as the first argument (op).
  // The second and third arguments are the two numbers.
  // Returns the result of the operation.
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
  },
};

module.exports = Utils;

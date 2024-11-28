const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;

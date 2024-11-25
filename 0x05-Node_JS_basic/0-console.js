const { stdout } = require('process');

function displayMessage(message) {
  stdout.write(`${message}\n`);
}

module.exports = displayMessage;

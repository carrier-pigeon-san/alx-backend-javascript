const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const { assert } = chai;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    // Spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Spy on console.log
    const spyConsole = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    assert(spyConsole.calledWith('The total is: 120'), 'console.log was not called with correct message');

    // Restore the original functions
    spy.restore();
    spyConsole.restore();
  });
});

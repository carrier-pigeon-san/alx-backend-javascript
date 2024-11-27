const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('addition', function() {
  it('should return 4', function() {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });
  it('should return 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return -2', function() {
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
  it('should return 0', function() {
    assert.strictEqual(calculateNumber(0.25, 0.25), 0);
  });
  it('should return 1', function() {
    assert.strictEqual(calculateNumber(0.25, 0.75), 1);
  });
  it('should return 2', function() {
    assert.strictEqual(calculateNumber(0.75, 0.75), 2);
  });
  it('should return -4', function() {
    assert.strictEqual(calculateNumber(2.75, -7), -4);
  });
  it('should return 5', function() {
    assert.strictEqual(calculateNumber(2.5, 2), 5);
  });
});
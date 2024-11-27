const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('addition', function() {
  it('should return 4', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should return 5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return 6', function() {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return -4', function() {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
  });
  it('should return 2', function() {
    assert.strictEqual(calculateNumber('SUM', -2.5, 3.7), 2);
  });
});

describe('subtraction', function() {
  it('should return 2', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
  });
  it('should return -2', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return 2', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });
  it('should return -4', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -3, 1), -4);
  });
  it('should return 1', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 1.7), 1);
  });
});

describe('division', function() {
  it('should return 2', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });

  it('should return -2', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4, -2), -2);
  });

  it('should return "Error" when dividing by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('should return -2.5', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 5, -2), -2.5);
  });

  it('should return 4.5 when dividing 9 by 2', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 9, 2), 4.5);
  });

  it('should return 1 when dividing 2.4 by 2.4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.6), 1);
  });

  it('should return 1000 when dividing 1000000 by 1000', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1000000, 1000), 1000);
  });

  it('should return -3.5 when dividing -7 by 2', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -7, 2), -3.5);
  });

  it('should return -0.42857142857142855 when dividing -3.3 by 7', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -3.3, 7), -0.42857142857142855);
  });
});

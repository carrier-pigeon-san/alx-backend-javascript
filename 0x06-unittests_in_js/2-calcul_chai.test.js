const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('addition', function() {
  it('should return 4', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5', function() {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5', function() {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6', function() {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return -4', function() {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('should return 2', function() {
    expect(calculateNumber('SUM', -2.5, 3.7)).to.equal(2);
  });
});

describe('subtraction', function() {
  it('should return 2', function() {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
  });
  it('should return -2', function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return 2', function() {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });
  it('should return -4', function() {
    expect(calculateNumber('SUBTRACT', -3, 1)).to.equal(-4);
  });
  it('should return 1', function() {
    expect(calculateNumber('SUBTRACT', 3.2, 1.7)).to.equal(1);
  });
});

describe('division', function() {
  it('should return 2', function () {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('should return -2', function () {
    expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
  });

  it('should return "Error" when dividing by 0', function () {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });

  it('should return -2.5', function () {
    expect(calculateNumber('DIVIDE', 5, -2)).to.equal(-2.5);
  });

  it('should return 4.5 when dividing 9 by 2', function () {
    expect(calculateNumber('DIVIDE', 9, 2)).to.equal(4.5);
  });

  it('should return 1 when dividing 2.4 by 2.4', function () {
    expect(calculateNumber('DIVIDE', 2.4, 1.6)).to.equal(1);
  });

  it('should return 1000 when dividing 1000000 by 1000', function () {
    expect(calculateNumber('DIVIDE', 1000000, 1000)).to.equal(1000);
  });

  it('should return -3.5 when dividing -7 by 2', function () {
    expect(calculateNumber('DIVIDE', -7, 2)).to.equal(-3.5);
  });

  it('should return -0.42857142857142855 when dividing -3.3 by 7', function () {
    expect(calculateNumber('DIVIDE', -3.3, 7)).to.equal(-0.42857142857142855);
  });
});

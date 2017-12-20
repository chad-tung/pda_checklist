var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function() {
    assert.equal(true, true)
  })

  it('should update previousOperator when operator is clicked', function() {
    assert.strictEqual(calculator.previousOperator, null);
    calculator.numberClick(4);
    calculator.operatorClick('*');
    assert.strictEqual(calculator.previousOperator, '*');
  });

  it('should update previousOperator to null when = is clicked', function() {
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousOperator, null)
  })

  it('should update previousTotal when operator is clicked', function() {
    calculator.numberClick(4);
    assert.strictEqual(calculator.previousTotal, 0);
    calculator.operatorClick('/')
    assert.strictEqual(calculator.previousTotal, 4);
  });

  it('should set newTotal to false when a number is clicked', function() {
    assert.strictEqual(calculator.newTotal, true);
    calculator.numberClick(3);
    assert.strictEqual(calculator.newTotal, false);
  });

  it('should only set newTotal to true when operator is clicked', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    assert.strictEqual(calculator.newTotal, true);
    calculator.numberClick(6);
    calculator.numberClick(4);
    assert.strictEqual(calculator.newTotal, false);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.newTotal, true);
  });

  it('should concatenate numberClicks for runningTotal if no operators have been clicked', function() {
    calculator.numberClick(9);
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 99);
  })

  it('should set runningTotal to the number the operator applies onto previousTotal', function() {
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.operatorClick('*');
    assert.strictEqual(calculator.runningTotal, 99);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 396);
  });

  // FUNCTIONS

  it('should be able to add numbers', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 13);
  });

  it('should be able to subtract numbers', function() {
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, -3);
  });

  it('should be able to multiply numbers', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 27);
  });

  it('should be able to divide numbers', function() {
    calculator.numberClick(3);
    calculator.numberClick(3)
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 11);
  });

  it('should be able to clear runningTotal, but maintain previous total and operator', function() {
    calculator.numberClick(5000);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    assert.strictEqual(calculator.previousTotal, 5000);
    assert.strictEqual(calculator.runningTotal, 2);
    assert.strictEqual(calculator.previousOperator, '*');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0)
    assert.strictEqual(calculator.previousTotal, 5000);
    assert.strictEqual(calculator.previousOperator, '*');
  });

  it('should clear everything to 0 and null if clearClick is clicked twice', function() {
    calculator.numberClick(5000);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    for (var i=0; i < 2; i++) {
      calculator.clearClick();
    }
    assert.strictEqual(calculator.previousTotal, null);
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousOperator, null);
  })

});

var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // Addition
  it('Addition: 1 + 4 = 5', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5)
  })

  // Subtraction
  it('Subtraction: 7 - 4 = 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 4)
  })

  // Multiplication
  it('Multiplication: 3 * 5 = 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 15)
  })

  // Division
  it('Division: 21 / 7 = 3', function(){
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 7)
  })

  // Number click
  it('Multiple number button clicks: 12345', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 12345)
  })

  // Operator click
  it('Multiple operator button clicks: 1 + 2 =; / 3 =; * 4 =; - 5 =', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, -1)
  })

  // Clear click
  it('Clear running total not calculation', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })
});

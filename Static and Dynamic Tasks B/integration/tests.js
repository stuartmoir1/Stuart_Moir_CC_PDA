var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Calculator functionality:', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // Number buttons update display.
  // 1
  it('Should have working number buttons - 1', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })
  // 2
  it('Should have working number buttons - 2 ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  // 3
  it('Should have working number buttons - 3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })
  // 4
  it('Should have working number buttons - 4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })
 // 5
  it('Should have working number buttons - 5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('Should have working number buttons - 6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('Should have working number buttons - 7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('Should have working number buttons - 8', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('Should have working number buttons - 9', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('Should have working number buttons - 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  // Arithmetic operations work to update the display with operation result.
  // Addition
  it('Addition: 1 + 4 = 5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })
  // Subtraction
  it('Subtraction: 7 - 4 = 3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })
  // Multiplication
  it('Multiplication: 3 * 5 = 15', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })
  // Division
  it('Division: 21 / 7 = 3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  // Chain multiple operations together.
  it('Multiple operator button clicks: 1 + 2 =; / 3 =; * 4 =; - 5 =', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1')
  })

  // Numbers work as expected - postive.
  it('Addition: 1 + 2 = 3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })
  // Numbers work as expected - negative.
  it('Addition: 1 - 2 - 3 = 4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-4')
  })
  // Numbers work as expected - decimals (1dp).
  it('Decimals (1dp): 1 / 2 = 0.5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  })
  // Numbers work as expected - decimals (2dp).
  it('Decimals (2dp): 1 / 4 = 0.25', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.25')
  })
  // Numbers work as expected - decimals (3dp).
  it('Decimals (3dp): 1 / 1000 = 0.001', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.001')
  })
  // Numbers work as expected - large numbers.
  it('Large numbers: 12345 * 67890 = 838102050', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('838102050')
  })

  // Divide by 0.
  it('Divide by 0: 1 / 0 = Infinity', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })
  // Mulitple by 0.
  it('Multiply by 0: 1 * 0 = 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  // Last question.

});
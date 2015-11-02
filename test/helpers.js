var fizzBuzz = require('../helpers');
var assert = require('assert');

describe('Calling FizzBuzzTurn', function () {
  describe ("with a 1", function() {
    it("should respond with a one", function() {
      var one = fizzBuzz.turn(1);
      assert.strictEqual(one, "1");
    })
  });

  describe ("with a 3", function() {
    it("should respond with a fizz", function() {
      var three = fizzBuzz.turn(3);
      assert.strictEqual(three, "fizz");
    })
  })

  describe ("with a 5", function() {
    it("should respond with a buzz", function() {
      var five = fizzBuzz.turn(5);
      assert.strictEqual(five, "buzz");
    })
  })

  describe ("with a 15", function() {
    it("should respond with a fizzbuzz", function() {
      var fifteen = fizzBuzz.turn(15);
      assert.strictEqual(fifteen, "fizz buzz");
    })
  })

});

describe('Calling FizzBuzzResults', function () {

  describe ("with a 16", function() {
    it("should respond with a the correct string", function() {
      var results = fizzBuzz.results(15);
      assert.strictEqual(results, " 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizz buzz");
    })
  });

});

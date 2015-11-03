var twilio = require('twilio');

//Returns the result of one turn of fizz buzz
var fizzBuzzTurn = function(number){
  if (number % 15 == 0) {
    return "fizz buzz";
  }
  if (number % 3 == 0){
    return "fizz";
  }
  if (number % 5 == 0){
    return "buzz";
  }
  else {
    return number.toString();
  }
}

// Returns a string of fizzbuzz rounds up to a certain digit
var fizzBuzzResults = function(digit){
  var results = "";
  for (var i = 1; i < digit + 1; i++){
    results = results + " " + fizzBuzzTurn(i);
  }
  return results;
}

var generateTwimlResponse = function(digit){
  var results = fizzBuzzResults(digit);
  var twiml = new twilio.TwimlResponse();
  twiml.say("The results of this game are");
  twiml.say(results);
  twiml.say("Thank you for playing!");
  twiml.hangup();
  return twiml.toString();
}

module.exports = { results: fizzBuzzResults, turn: fizzBuzzTurn, generateTwiml: generateTwimlResponse };

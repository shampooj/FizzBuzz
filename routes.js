var twilio = require('twilio');

function fizzBuzzTurn(digit){
  if (digit % 15 == 0) {
    return "fizz buzz";
  }
  if (digit % 5 == 0){
    return "fizz";
  }
  if (digit % 3 == 0){
    return "buzz";
  }
  else {
    return digit.toString();
  }
}

// Express route handler for the game loop
exports.fizzbuzz = function(request, response) {
  if (twilio.validateExpressRequest(request, authToken)){
    var twiml = new twilio.TwimlResponse();
    twiml.say('Welcome to the FizzBuzz game!');
    twiml.say('Please enter a number less than 50 using the number keys on your telephone followed by the star key');
    twiml.gather({
        action: "https://ec81cc80.ngrok.io/digit",
        timeout: 10,
        finishOnKey: '*'
    });
    response.type('text/xml');
    response.send(twiml.toString());
  } else {
    response.send("You ain't Twilio, so get out.")
  }

};

exports.digit = function(request, response) {
  if (twilio.validateExpressRequest(request, authToken)) {
    var twiml = new twilio.TwimlResponse();
    var digit = parseInt(request.body.Digits);
    for (var i = 1; i < digit + 1; i++){
      var turn = fizzBuzzTurn(i);
      twiml.say(turn);
    }
    twiml.say("Thank you for playing!");
    twiml.hangup();
    response.type('text/xml');
    response.send(twiml.toString());
  } else {
    response.send("You ain't Twilio, so get out.")
  }
};

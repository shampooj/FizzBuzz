var twilio = require('twilio');
var fizzBuzz = require('./helpers');
var config = require('./config')[process.env.NODE_ENV];

// Express route handler for the game loop
exports.fizzbuzz = function(request, response) {
    if (twilio.validateExpressRequest(request, config.authToken)){
      var twiml = new twilio.TwimlResponse();
      twiml.say('Welcome to the FizzBuzz game!');
      twiml.say('Please enter a number using the number keys on your telephone, followed by the star key');
      twiml.gather({
          action: config.forwardURL + "/digit",
          timeout: 10,
          finishOnKey: '*'
      });
      response.type('text/xml');
      response.send(twiml.toString());
    } else {
      response.status(500).send("You ain't Twilio, so get out.")
    }

};

exports.digit = function(request, response) {
  if (error){
    console.log("There was an error in POST /digit" + error);
    res.send("Did not make the post request to /digit!");
  }
  else {
    if (twilio.validateExpressRequest(request, config.authToken)) {
      var twiml = new twilio.TwimlResponse();
      var digit = parseInt(request.body.Digits);
      var results = fizzBuzz.results(digit);
      twiml.say(digit);
      twiml.say("Thank you for playing!");
      twiml.hangup();
      response.type('text/xml');
      response.send(twiml.toString());
    } else {
      response.send("You ain't Twilio, so get out.")
    }
  }

};

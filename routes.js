var twilio = require('twilio');
var fizzBuzz = require('./helpers');

  //Respond to get request with twiml
exports.fizzbuzz = function(request, response) {

  // In production, a TLS server exposed to a public domain with SSL certs would allow for validation
  // that the requests are coming from Twilio. For the sake of this coding challenge, I have left out
  // validation.

  // if (twilio.validateExpressRequest(request, process.env.TWILIO_AUTH_TOKEN)){
    var twiml = new twilio.TwimlResponse();
    twiml.say('Welcome to the FizzBuzz game!');
    twiml.say('Please enter a number using the number keys on your telephone, followed by the star key to indicate that you are finished typing');
    twiml.gather({
        action: process.env.FORWARDING_URL + "/digit",
        timeout: 10,
        finishOnKey: '*'
    });
    response.type('text/xml');
    response.send(twiml.toString());
  // } else {
  //   response.status(500).send("You ain't Twilio, so get out.")
  // }

};

//Generate twiml response to user input of selected digit
exports.digit = function(request, response) {

  // if (twilio.validateExpressRequest(request, process.env.TWILIO_AUTH_TOKEN)) {
    var twiml = new twilio.TwimlResponse();
    var digit = parseInt(request.body.Digits);
    var results = fizzBuzz.results(digit);
    console.log(results);
    twiml.say("The results of this game are");
    twiml.say(results);
    twiml.say("Thank you for playing!");
    twiml.hangup();
    response.type('text/xml');
    response.send(twiml.toString());
  // } else {
  //   response.send("You ain't Twilio, so get out.")
  // }

};

var twilio = require('twilio');
var fizzBuzz = require('./helpers');
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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
    var digit = parseInt(request.body.Digits);
    var twimlResponse = fizzBuzz.generateTwiml(digit);
    response.type('text/xml');
    response.send(twimlResponse);
  // } else {
  //   response.send("You ain't Twilio, so get out.")
  // }

};

exports.callTwilioWithNumber = function(request, response) {
  var numberToCall = request.body.phoneNumber;

  //make the call to Twilio
  client.calls.create({
          url: process.env.FORWARDING_URL + "/fizzbuzz",
          to: numberToCall,
          from: process.env.TWILIO_NUMBER,
          method: "GET"
        }, function(err, call) {
            if (err) {
              console.log(err);
            }
        });

  response.sendStatus(200);
};

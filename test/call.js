var request = require('supertest');
var server = require('../index');
var xml = require('xml');
var fizzBuzz = require('../helpers');
var assert = require('assert');
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


describe('Calling Twilio', function () {

  it('The twilio account should be configured properly', function(done) {

        // use Twilio to call
        client.calls.create({
          url: process.env.FORWARDING_URL + "/fizzbuzz",
          to: process.env.TWILIO_NUMBER,
          from: process.env.PHONE_NUMBER,
          method: "GET"
        }, function(err, call) {
            if (err) ;
        });

        done();

  });

});

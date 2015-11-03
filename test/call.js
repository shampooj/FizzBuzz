var request = require('supertest');
var server = require('../index');
var assert = require('assert');
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

describe('Calling Twilio', function () {

  it('The twilio account is configured to make calls', function(done) {

        // use Twilio to call
        client.calls.create({
          url: process.env.FORWARDING_URL + "/fizzbuzz",
          to: process.env.PHONE_NUMBER,
          from: process.env.TWILIO_NUMBER,
          method: "GET"
        }, function(err, call) {
            if (err){
              console.log(err);
              return false;
            };
            var callTo = call.to;
            assert.strictEqual(callTo, process.env.PHONE_NUMBER);
        });

        done();

  });

});

// TODO: Integration tests for E2E experiment
// Ran out of time to write more tests! I would have liked to test the full E2E experience with a fake dom (using jsdom) that
// triggers a form submission and places a call

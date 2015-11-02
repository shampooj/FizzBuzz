var request = require('supertest');
var server = require('../index');
var config = require('../config')[process.env.NODE_ENV];
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

describe('Loading the server', function () {

  it('responds to /', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('GET /fizzbuzz not from Twilio should not work', function(done) {
    request(server)
      .get('/fizzbuzz')
      .expect(500, done);
  });

  it('POST /digit not from Twilio should not work', function(done) {
    request(server)
      .post('/digit')
      .expect(500, done);
  });

  it('GET /fizzbuzz from Twilio should work', function(done) {
    console.log(config.forwardURL);
    client.calls.create({
        url: config.forwardURL + "/fizzbuzz",
        to: "+14155551212",
        sendDigits: "5*",
        from: config.twilioNumber,
        method: "GET"
    }, function(err, call) {
      console.log(err);
        console.log(call);
    });

  });

});

var request = require('supertest');
var server = require('../index');

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


});

var request = require('supertest');
var server = require('../index');
var xml = require('xml');


describe('Loading the server', function () {

  //Sanity Check
  it('responds to /', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('GET /fizzbuzz (without authentication) should respond with proper XML', function(done) {
    var expectedXML = xml([ { Response: [ { Say: 'Welcome to the FizzBuzz game!' } ,
                            { Say: 'Please enter a number using the number keys on your telephone, followed by the star key to indicate that you are finished typing' },
                            { Gather: [{ _attr: { action: process.env.FORWARDING_URL + "/digit", timeout: "10", finishOnKey:"*" }  } ] } ] } ],
                            { declaration: { encoding: 'UTF-8' }});
    var actual;
    request(server)
      .get('/fizzbuzz')
      .expect(200, expectedXML, done)
  });

  it('POST /digit (without authentication) should respond with proper XML', function(done) {
    request(server)
      .post('/digit')
      .expect(200, done);
  });

  //TODO: Need to include tests for authorized GET /fizzbuzz and POST /digit

});

var request = require('supertest');
var server = require('../index');
var xml = require('xml');
var fizzBuzz = require('../helpers');
var assert = require('assert');

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
    request(server)
      .get('/fizzbuzz')
      .expect(200, expectedXML, done)
  });

  it('POST /digit (without authentication) should respond with proper XML', function(done) {

    request(server)
        .post('/digit')
        .send()
        .end(function(err, res){
          var expectedXML = fizzBuzz.generateTwiml(0);
          assert.strictEqual(res.text, expectedXML);
          done();
        });

  });

});

//Modules required for TLS server
// var fs = require('fs');
// var https = require('https');

var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');

// Create Express web app
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Sanity check
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// Twilio Webhook routes
app.get('/fizzbuzz', routes.fizzbuzz);
app.post('/digit', routes.digit);
app.post('/callTwilio', routes.callTwilioWithNumber);

/////////TLS ENABLED SERVER
// Twilio requires a public domain to point a number to, which is acquired by using a module called
// ngrok to tunnel localhost:3000 to a public domain.
// To authenticate requests from TWilio, Twilio requires that the server must have TLS enabled. However,
// TLS enabled tunneling with ngrok costs $30 per month and must take place over a personal, public domain with
// SSL certs, which would cost additional money. This seemed outside of the scope of this coding challenge, so I
// have left out authentication of the X-Twilio-Signature Header and have kept a simple express server without TLS.

// Creating a TLS server using key and cert
// var server = https.createServer({
//      key: fs.readFileSync('./key.pem'),
//      cert: fs.readFileSync('./cert.pem')
//    }, app).listen(3000);

//Creating a server on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('FizzBuzz app listening at http://localhost', host, port);
});

module.exports = server;

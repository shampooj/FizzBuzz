var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');

// Create Express web app
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));


//Sanity check
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// Twilio Webhook routes
app.get('/fizzbuzz', routes.fizzbuzz);
app.post('/digit', routes.digit);

// Create server and mount express app
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('FizzBuzz app listening at http://localhost', host, port);
});

module.exports = server;

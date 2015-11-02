var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');

// Create Express web app with some useful middleware
var app = express();
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Twilio Webhook routes
app.get('/fizzbuzz', routes.fizzbuzz);
app.post('/digit', routes.digit);

// Create HTTP server and mount Express app
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost', host, port);
});

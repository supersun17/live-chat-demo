'use strict'

var express = require('express'), app = express(), http = require('http').Server(app), bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes')(app);

http.listen(8080, function() {
	console.log('listening');
});
'use strict'

var express = require('express'), app = express(), http = require('http').Server(app), bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes')(app);

var session = require('express-session'), redisStore = require('connect-redis')(session), redis = require('redis'), rdbSession = require('./models/rdbSession')(redis);

app.use(session({
	secret: '975517C20B9D053186CE8BCF5C90813F', // md5 supersun17
	store: new redisStore({ 
		host: 'localhost', 
		port: 6379,
		client: rdbSession,
		ttl: 3600
	}),
	saveUninitialized: false,
	resave: false
}));

http.listen(8080, function() {
	console.log('listening');
});
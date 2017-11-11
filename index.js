'use strict'

var express = require('express'), 
	app = express(), 
	http = require('http'), 
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var routes = require('./routes')(app);

var session = require('express-session'), 
	redisStore = require('connect-redis')(session), 
	redis = require('redis'), 
	rdbSession = require('./models/rdbSession')(redis);

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

var server = http.createServer(app);
server.listen(8080, function() {
	console.log('listening');
});

server.on('request', (request, response) => {
  // the same kind of magic happens here!
  console.log(request.method+":"+request.originalUrl)
});
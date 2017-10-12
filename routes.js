'use strict'

module.exports = function(app) {

	var home = require('./controllers/home');

	app.route('/')
	.get(home.index);

	return this;
}
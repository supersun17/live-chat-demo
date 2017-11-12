'use strict'

module.exports = function(app) {

	// controllers
	var index = require('./controllers/index');
	var chatroom = require('./controllers/chatroom');

	// routes
	app.route(['/','/home'])
	.get(index.home);

	app.route('/about-me')
	.get(index.aboutMe);

	app.route('/projects')
	.get(index.projects);

	app.route(['/chatroom-auth','/chatroom'])
	.get(chatroom.authentication)
	.post(chatroom.authentication);

	app.route(['/chatroom-reg'])
	.post(chatroom.registration);

	app.route('/chatroom-main')
	.get(chatroom.main);

	app.route('/chatroom-user')
	.get(chatroom.user);

	return this;
}
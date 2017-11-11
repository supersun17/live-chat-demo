'use strict'

module.exports = function(app) {

	var index = require('./controllers/index');

	app.route(['/','/home'])
	.get(index.home);

	app.route('/about-me')
	.get(index.aboutMe);

	app.route('/projects')
	.get(index.projects);

	var chatroom = require('./controllers/chatroom');

	app.route(['/chatroom-auth','/chatroom'])
	.get(chatroom.authentication)
	.post(chatroom.authentication);

	app.route('/chatroom-main')
	.get(chatroom.main);

	app.route('/chatroom-user')
	.get(chatroom.user);

	return this;
}
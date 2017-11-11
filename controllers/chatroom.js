'use strict'

exports.authentication = function(req,res) {
	if(req.method == 'GET') {
		res.render('chatroom/chatroom-auth');
	} else if(req.method == 'POST') {
		var username = req.body.username;

		if(username == "mingsun") {
			res.json({status: "Done"});
		} else {
			res.json({status: "DUP"});
		}
		
	}
}

exports.main = function(req,res) {
	if(req.method == 'GET') {
		res.render('chatroom/chatroom-main');
	}
}

exports.user = function(req,res) {
	if(req.method == 'GET') {
		res.render('chatroom/chatroom-user');
	}
}
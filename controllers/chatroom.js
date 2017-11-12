'use strict'

var usersDB = require('../models/users');
var Users = new usersDB();

exports.authentication = function(req,res) {
	if(req.method == 'GET') {
		if(req.get('Content-Type') == 'application/json') {
			var username = req.query.username;

			Users.getUser(username, function(resultUser) {
				if(resultUser == null) {
					res.json({ status: "Failed" });
				} else if(resultUser.length == 0) {
					res.json({ status: "Not Found" } );
				} else {
					res.json({ status: "Found" } );
				}
			});
		} else {
			res.render('chatroom/chatroom-auth');
		}
	} else if(req.method == 'POST') {
		var username = req.body.username;
		var password = req.body.password;

		Users.loginUser({ username: username, password: password }, function(resultUser) {
			if(resultUser == null) {
				res.json({ status: "Failed" });
			} else if(resultUser.length == 0) {
				res.json({ status: "Not Found" } );
			} else {
				res.json({ status: "Found" } );
			}		
		});
	}
}

exports.registration = function(req,res) {
	if(req.method == 'POST') {
		var username = req.body.username;
		var password = req.body.password;
			
		Users.regUser(username, function(result) {
			if(result) {
				res.json({ status: "Failed" });
			} else {
				res.json({ status: "Success" });
			}
		});	
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
'use strict'

exports.home = function(req,res) {
	if(req.method == 'GET') {
		res.render('index/home');
	}
}

exports.aboutMe = function(req,res) {
	if(req.method == 'GET') {
		res.render('index/about-me');
	}
}

exports.projects = function(req,res) {
	if(req.method == 'GET') {
		res.render('index/projects');
	}
}
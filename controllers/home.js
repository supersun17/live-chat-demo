'use strict'

exports.index = function(req,res) {
	if(req.method == 'GET') {
		res.send('This is Home');
	}
}
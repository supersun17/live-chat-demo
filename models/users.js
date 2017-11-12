'use strict'

module.exports = UsersDB;

function UsersDB() {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var userSchema = new Schema({
		name: String,
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		admin: Boolean,
		address: {
			street: String,
			city: String,
			state: String,
			zipcode: String
		},
		bio: {
			age: Number,
			sex: String
		},
		created_at: { type: Date, require: true }
	});

	// the default values
	userSchema.pre('save', function(next) {
		// get the current date
		var currentDate = new Date();

		// if created_at doesn't exist, add to that field
		if(!this.created_at) {
			this.created_at = currentDate;
		}

		next();
	});

	this.Users = mongoose.model('Users', userSchema);
}

UsersDB.prototype.getUser = function(username, callback) {
	this.Users.find({ username: username }, function(err, resultUser) {
		if(err) {
			console.log(err);
			callback(null);
		} else {
			console.log(resultUser);
			callback(resultUser);
		}
	});
};

UsersDB.prototype.loginUser = function(user, callback) {
	this.Users.find(user, function(err, resultUser) {
		if(err) {
			console.log(err);
			callback(null);
		} else {
			console.log(resultUser);
			callback(resultUser);
		}
	});
}

UsersDB.prototype.regUser = function(user, callback) {
	var newUser = this.Users(user);

	newUser.save(function(err) {
		if(err) { 
			if(err.code == '11000') {
				callback('Dup');
			} else {
				console.log(err);
				callback('Error');
			}
		} else {
			callback('Success');
			console.log('User created!');
		}
	});
};

UsersDB.prototype.updateUser = function(username, updateInfo, callback) {
	this.Users.findOneAndUpdate({ username: username }, updateInfo, function(err, resultUser) {
		if(err) {
			console.log(err);
			callback(null);
		} else {
			console.log(resultUser);
			callback(resultUser);
		}
	});
};

UsersDB.prototype.deleteUser = function(username, callback) {
	// find the user with id 4
	this.Users.findOneAndRemove({ username: username }, function(err) {
		if(err) {
			console.log(err);
			callback(false);
		} else {
			callback(true);
			console.log('User deleted!');
		}
	});
};
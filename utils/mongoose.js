var dbURL = require('../config.js').db;

var mongoose = require('mongoose'),
	Admin = mongoose.mongo.Admin;

exports.connect = function (callback){
	mongoose.connect(dbURL);
}

exports.mongoObj = function(){
	return mongoose;
}

exports.CreateConnection = function(callback, returnFunc){
	var connection = mongoose.createConnection(dbURL);

	connection.on('open', function(){
		callback(connection, Admin, returnFunc)
	})
}
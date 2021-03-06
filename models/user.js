var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	username : String,
	password : String
})

mongoose.model('user', userSchema)

module.exports.Schema = function(name){
	return {
		model : mongoose.model(name)
	}
}
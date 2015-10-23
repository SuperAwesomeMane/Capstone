var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = Schema({
	username: String,
	password: String,
	email: String,
	facebook: Object,
	google: Object
});

module.exports = mongoose.model('User', UserSchema);
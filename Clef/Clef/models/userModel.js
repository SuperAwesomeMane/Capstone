var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	image: {
		type: String
	},
	email: {
		type: String
	},
	lessonsCompleted: {
		type: Number
	},
	facebook: {
		type: Object
	},
	google: {
		type: Object
	}
});

module.exports = mongoose.model('User', UserSchema);
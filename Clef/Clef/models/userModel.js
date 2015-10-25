var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = Schema({
	displayName: {
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
	facebook: {
		type: Object
	},
	google: {
		type: Object
	}
});

module.exports = mongoose.model('User', UserSchema);
var mongoose = require('mongoose'),
	UserSchema;

UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	grade: {
		type: String,
		required: true
	},
	compExperience: {
		type: Array,
		required: false
	},
	techExperience: {
		type: Array,
		required: false
	}
});

module.exports = UserSchema;
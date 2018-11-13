const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foundSchema = new Schema({
	name: String,
	location: String,
	email: String,
	photo: String,
	description: String,
	school: String,
	question: String,
	created: { type: Date, default: Date.now, },
	password: String
});

module.exports = mongoose.model('found', foundSchema);
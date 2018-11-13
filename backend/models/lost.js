const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lostSchema = new Schema({
	name: String,
	location: String,
	email: String,
	photo: String,
	description: String,
	reward: Number,
	created: { type: Date, default: Date.now, },
	password: String
});

module.exports = mongoose.model('lost', lostSchema);
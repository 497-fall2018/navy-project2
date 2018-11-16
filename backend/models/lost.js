const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lostSchema = new Schema({
	name: String,
	location: String,
	email: String,
	photo: {
		data: Buffer,
		contentType: String
	},
	description: String,
	reward: Number,
	created: { type: Date, default: Date.now, },
	password: String
});

// Delete doc after a certain amount of time
lostSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); //expires in 30 days

module.exports = mongoose.model('lost', lostSchema);
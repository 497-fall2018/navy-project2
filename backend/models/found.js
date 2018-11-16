const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foundSchema = new Schema({
	name: String,
	location: String,
	email: String,
	photo: {
		data: Buffer,
		contentType: String
	},
	description: String,
	question: String,
	created: { type: Date, default: Date.now, },
	password: String,
	expire: {
		type: Date,
		required: true
	}
});

// Delete doc afte a certain amount of time
foundSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); //expires in 30 days

module.exports = mongoose.model('found', foundSchema);
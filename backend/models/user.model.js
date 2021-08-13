const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		pseudo: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		banner: {
			type: String,
			default: 'background.png',
		},
		profilname: {
			type: String,
			default: '',
		},
		profilpic: {
			type: String,
			default: 'background.png',
		},
		bio: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema({
	name: String,
	dateOfBirth: Date,
	gender: String,
	height: Number,
	weight: Number,
	note: String,
	picture: String,
	breed: [{ type: Schema.Types.ObjectId, ref: 'Breed' }],
	mom: { type: Schema.Types.ObjectId, ref: 'Dog' },
	dad: { type: Schema.Types.ObjectId, ref: 'Dog' },
	children: [{ type: Schema.Types.ObjectId, ref: 'Dog' }],
	lastUpdated: Date
});

const Dog = mongoose.model('Dog', dogSchema);

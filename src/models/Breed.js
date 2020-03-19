const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true
	}
});

mongoose.model('Breed', breedSchema);

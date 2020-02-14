const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
	name: String
});

mongoose.model('Breed', breedSchema);

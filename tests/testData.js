const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');

const dogOneId = new mongoose.Types.ObjectId();
const dogTwoId = new mongoose.Types.ObjectId();

const dogOne = {
	_id: dogOneId,
	name: 'Samie',
	gender: 'female',
	height: 123,
	weight: 95,
	created: new Date()
};
const dogTwo = {
	_id: dogTwoId,
	name: 'John',
	gender: 'male',
	height: 123,
	weight: 95,
	created: new Date()
};

const setDogData = async () => {
	await Dog.deleteMany();
	await new Dog(dogOne).save();
	await new Dog(dogTwo).save();
};

module.exports = { dogOne, dogOneId, dogTwo, dogTwoId, setDogData };

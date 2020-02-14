const express = require('express');
const mongoose = require('mongoose');

//Dog Model
const Dog = mongoose.model('Dog');

// Dog Route Handlers
const router = new express.Router();

router.post('/api/dogs', async (req, res) => {
	const dog = new Dog(req.body);

	try {
		await dog.save();
		res.send(dog);
	} catch (error) {
		res.send(error);
	}
});

router.get('/api/dogs', async (req, res) => {
	try {
		const dogs = await Dog.find({});
		res.send(dogs);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;

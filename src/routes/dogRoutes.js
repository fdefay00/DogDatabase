const express = require('express');
const mongoose = require('mongoose');

//Load Dog Model
const Dog = mongoose.model('Dog');

// Dog Route Handlers
const router = new express.Router();

//Add new dog to database
router.post('/api/dogs', async (req, res) => {
	const dog = new Dog(req.body);

	try {
		await dog.save();
		res.send(dog);
	} catch (error) {
		res.send(error);
	}
});

//Get list of all dogs currently in DB
router.get('/api/dogs', async (req, res) => {
	try {
		const dogs = await Dog.find({});
		res.send(dogs);
	} catch (error) {
		res.send(error);
	}
});

//Get one specific dog info based on ID
router.get('/api/dogs/:id', async (req, res) => {
	try {
		const dog = await Dog.findById(req.params.id);
		if (!dog) return res.status(404).send('none found');
		res.send(dog);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Update a dog's info
router.patch('/api/dogs/:id', async (req, res) => {
	try {
		const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});
		if (!dog) {
			return res.status(404).send('Dog Not found');
		}
		dog.lastUpdated = new Date();
		res.send(dog);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Remove a dog from DB
router.delete('/api/dogs/:id', async (req, res) => {
	try {
		const dog = await Dog.findByIdAndDelete(req.params.id);
		if (!dog) {
			return res.status(404).send('Dog Not found');
		}
		res.send(dog);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;

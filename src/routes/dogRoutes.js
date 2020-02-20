const express = require('express');
const mongoose = require('mongoose');

//Load Dog Model
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

router.get('/api/dogs/:id', async (req, res) => {
	try {
		const dog = await Dog.findById(req.params.id);
		if (!dog) return res.status(404).send('none found');
		res.send(dog);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.patch('/api/dogs/:id', async (req, res) => {
	try {
		const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});
		if (!dog) {
			return res.status(404).send('Dog Not found');
		}
		res.send(dog);
	} catch (error) {
		res.status(500).send(error);
	}
});

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

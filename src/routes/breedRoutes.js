const express = require('express');
const mongoose = require('mongoose');

// Load Breed model
const Breed = mongoose.model('Breed');

// Breed route handlers
const router = new express.Router();

router.post('/api/breeds', async (req, res) => {
	const breed = new Breed(req.body);

	try {
		await breed.save();
		res.send(breed);
	} catch (error) {
		res.send(error);
	}
});

// Get list of all breeds currently in DB
router.get('/api/breeds', async (req, res) => {
	try {
		const breeds = await Breed.find({});
		res.send(breeds);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;

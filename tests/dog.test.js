const request = require('supertest');
const app = require('../app');
const { dogOne, dogOneId, setDogData } = require('./testData');
const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');

beforeEach(setDogData);

test('Should Create a new dog and add to database', async () => {
	const response = await request(app)
		.post('/api/dogs')
		.send({
			name: 'Jane',
			gender: 'female',
			height: 113,
			weight: 65,
			created: new Date()
		})
		.expect(200);

	const allDogs = await Dog.find({});
	expect(allDogs.length).toBe(3);

	const newDog = await Dog.findById(response.body._id);
	expect(newDog).not.toBeNull();

	expect(response.body).toMatchObject({
		name: 'Jane',
		gender: 'female',
		height: 113,
		weight: 65
	});
});

test('Should get list of all dogs in db', async () => {
	const response = await request(app)
		.get('/api/dogs')
		.expect(200);

	expect(response.body.length).toBe(2);
});

test("Should get a specific dog's information", async () => {
	const response = await request(app)
		.get(`/api/dogs/${dogOneId}`)
		.expect(200);

	expect(response.body).toMatchObject({
		name: 'Samie',
		gender: 'female',
		height: 123,
		weight: 95
	});
});

test('Should update dog information', async () => {
	const response = await request(app)
		.patch(`/api/dogs/${dogOneId}`)
		.send({
			name: 'Francois',
			gender: 'male',
			height: 124,
			weight: 96,
			lastUpdated: new Date()
		})
		.expect(200);

	expect(response.body).toMatchObject({
		name: 'Francois',
		gender: 'male',
		height: 124,
		weight: 96
	});
});

test('Should delete a specific dog', async () => {
	await request(app)
		.delete(`/api/dogs/${dogOneId}`)
		.expect(200);

	const allDogs = await Dog.find({});
	expect(allDogs.length).toBe(1);
});

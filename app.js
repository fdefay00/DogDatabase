const express = require('express');

//Database
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI);
require('./src/models/Dog');
require('./src/models/Breed');

//App configuration
const app = express();
app.use(express.json());

//Route Files
const dogRouter = require('./src/routes/dogRoutes');
const breedRouter = require('./src/routes/breedRoutes');
app.use(dogRouter);
app.use(breedRouter);

module.exports = app;

const express = require('express');

//Database
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI);
// require('./models/Breed');
require('./src/models/Dog');

//App configuration
const app = express();
app.use(express.json());

//Route Files
const dogRouter = require('./src/routes/dogRoutes');
app.use(dogRouter);

module.exports = app;

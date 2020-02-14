const express = require('express');
const keys = require('./config/keys');

//Database
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);
// require('./models/Breed');
require('./src/models/Dog');

//App configuration
const app = express();
app.use(express.json());

//Route Files
const dogRouter = require('./src/routes/dogRoutes');
app.use(dogRouter);

//PORT configuration
PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`running on port ${PORT}`));

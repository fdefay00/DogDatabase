const app = require('./app');

//PORT configuration
PORT = process.env.PORT;
app.listen(PORT, console.log(`running on port ${PORT}`));

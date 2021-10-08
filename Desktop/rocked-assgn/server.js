const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const port = 8383;

const dbUri = "ADD CONNECTION STRING";

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => server.listen(port)).catch((err) => console.log(err));


const server = http.createServer(app);

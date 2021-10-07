const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const port = 8383;

const dbUri = "mongodb://user:learner8383@cluster1-shard-00-00.f1ux4.mongodb.net:27017,cluster1-shard-00-01.f1ux4.mongodb.net:27017,cluster1-shard-00-02.f1ux4.mongodb.net:27017/rocked-assgn?ssl=true&replicaSet=atlas-2pilv4-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => server.listen(port)).catch((err) => console.log(err));


const server = http.createServer(app);

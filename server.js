var database = require('./config/mongoose');
var express = require('./config/express');
var config = require('./config/development');

database();
var app = express();

app.listen(config.port);
console.log("Application running on localhost:" + config.port);
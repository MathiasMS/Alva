var controller = require('./controller.js');
var mongoConnection = require('./mongoConnection.js');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/', controller);
app.listen(8082, ()=> console.log("Nueva conexión en el puerto 8082"));
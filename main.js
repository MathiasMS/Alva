var express = require('express');
var app = express();
var assert = require('assert');
var prueba = require('./prueba.js');

app.use(express.static('public'));
app.get('/alva.html', function (req, res) {
   res.sendFile( __dirname + "/" + "/html/alva.html" );
})
app.get('/styles.css', function (req, res) {
   res.sendFile( __dirname + "/" + "/css/styles.css" );
})

app.get('/canvasjs.min.js', function (req, res) {
   res.sendFile( __dirname + "/" + "/js/canvasjs.min.js" );
})

app.get('/Chart.min.js', function (req, res) {
   res.sendFile( __dirname + "/" + "/js/Chart.min.js" );
})

app.get('/alva.png', function (req, res) {
   res.sendFile( __dirname + "/" + "/resources/alva.png" );
})

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "/html/alva.html" );
})

app.get('/prueba.js', function (req, res) {
   res.sendFile( __dirname + "/" + "/prueba.js" );
})

app.get('/graphBuilder.js', function (req, res) {
   res.sendFile( __dirname + "/" + "/graphBuilder.js" );
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



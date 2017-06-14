var express = require('express');
var app = express();
var mongo = require('mongodb');
var assert = require('assert');
var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/alvadb';

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

app.get('/graphBuilder.js', function (req, res) {
   res.sendFile( __dirname + "/" + "/js/graphBuilder.js" );
})

app.get('/alva.png', function (req, res) {
   res.sendFile( __dirname + "/" + "/resources/alva.png" );
})

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "/html/alva.html" );
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


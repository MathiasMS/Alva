
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

insertData = function(db, data){
db.collection('measurements').insert({
"currentValue" : data
}, function(err, result){
assert.equal(err, null);
console.log("Inserted the measurement: "+ data +" into the measurements collections");
});
}

insertCurrentData = function(db, currentValue, currentType, measurementDate){
db.collection('measurements').insert({
"currentValue" : currentValue,
"currentType" : currentType,
"measurementDate" : measurementDate
}, function(err, result){
assert.equal(err, null);
console.log("Inserted the measurement into the measurements collections");
});
}

findAllData = function(db){
var measurements = db.collection('measurements').find();
return measurements;
}

exports.insert = function(data) {
MongoClient.connect(url, function(err, db) {
 assert.equal(err, null);
 insertData(db, data);
});
};

exports.insertCurrentData = function(data) {
MongoClient.connect(url, function(err, db) {
 assert.equal(err, null);
 insertCurrentData(db, data.currentValue, data.currentType, data.measurementDate);
});
};

exports.findAll = function(callback) {
MongoClient.connect(url, function(err, db) {
 assert.equal(err, null);
 callback(findAllData(db));
});
};
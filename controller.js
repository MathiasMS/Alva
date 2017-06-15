var router = require('express').Router();
var axios = require('axios');

router.get('/', function(req, res){
	res.redirect('/html/alva.html');
});

router.get('/getArduinoData', function(req, res){
	var hola;
	axios.get('http://169.254.210.183:8081/')
  .then(function (response) {
    console.log(response.data);    
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
    });

module.exports = router;
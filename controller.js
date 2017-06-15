var router = require('express').Router();

router.get('/', function(req, res){
	res.redirect('/html/alva.htm');
})
module.exports = router;
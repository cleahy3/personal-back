var express = require('express');
var router = express.Router();
var dataController = require('../controllers/data');

router.route("/")
	.get(dataController.index)
	.post(dataController.post);	

module.exports = router;
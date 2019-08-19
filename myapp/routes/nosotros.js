var express = require('express');
var router = express.Router();

let nosotros = require('../controllers/nosotros');

router.get('/nosotros',nosotros.nosotros );

module.exports = router;

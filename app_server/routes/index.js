var express = require('express');
var router = express.Router();

var travlrController = require('../controllers/travlr');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET travel page. */
router.get('/travel', travlrController.travel);

module.exports = router;
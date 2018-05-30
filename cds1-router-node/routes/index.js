var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 var mestitres = ["toto","tata"];
  res.render('index', { title: mestitres });
});

module.exports = router;

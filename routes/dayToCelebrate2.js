var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/', function(req, res, next) {

  fs.readFile( __dirname + "/" + "halloween.json", 'utf8', function (err, data) {
    res.end( data );
  });
});

module.exports = router;

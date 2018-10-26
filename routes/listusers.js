var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('list of users' + __dirname);
  fs.readFile( __dirname + "/" + "data_list.json", 'utf8', function (err, data) {
    res.end( data );
  });
});

module.exports = router;

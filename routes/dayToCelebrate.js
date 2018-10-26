var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/', function(req, res, next) {
  
  var json = "info_day.json";

  if (req.query.date)  {
    console.log(req.query);
    if (req.query.date === "20181031") json = "halloween.json";
    if (req.query.date === "20181026") json = "unicorn_day.json";
  } else
    console.log("no date in param");

  fs.readFile( __dirname + "/" + json, 'utf8', function (err, data) {
    res.end( data );
  });
});

module.exports = router;

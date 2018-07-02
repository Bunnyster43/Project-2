var express = require("express");

var router = express.Router();

var data = require("../models/data.js");

router.get("/", function(req, res) {
  data.all(function(data) {
  var hbsObject = { data };
  console.log(hbsObject);
  res.render("index", hbsObject);
 });
});

module.exports = router;

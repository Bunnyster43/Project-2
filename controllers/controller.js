var express = require("express");

var router = express.Router();

var data = require("../models/model.js");

router.get("/user", function (require, result) {
  data.all(function (data) {
    var hbsObject = { data };
    console.log(hbsObject);
    //result.render("index", hbsObject);
  });
});

router.post("/api/user", function (request, result) {
  data.insert(["user_name"],
    [request.body.name],
    function () {
      result.redirect("/");
    });
});

router.put("/api/user/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  data.update({
    user: req.body.user
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/user/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  data.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
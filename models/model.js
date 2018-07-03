var orm = require("../config/orm.js");

var users = {
  all: function (callback) {
    orm.all("users", function (result) {
      callback(result);
    });
  },

  create: function (cols, vals, callback) {
    orm.create("users", cols, vals, function (result) {
      callback(result);
    });
  },

  update: function (objColVals, condition, callback) {
    orm.update("users", objColVals, condition, function (result) {
      callback(result);
    });
  },

  delete: function (condition, callback) {
    orm.delete("users", condition, function (result) {
      callback(result);
    });
  }
};

module.exports = users;
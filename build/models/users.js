"use strict";

module.exports = function (mongoose) {
  var Users = mongoose.model("users", mongoose.Schema({
    _id: String,
    name: String,
    username: String,
    password: String
  }));
  return Users;
};
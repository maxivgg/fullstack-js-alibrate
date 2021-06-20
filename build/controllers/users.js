"use strict";

var db = require("../models");

var Users = db.users;

exports.findAll = function (req, res) {
  Users.find({}).then(function (data) {
    return res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error"
    });
  });
};

exports.login = function (req, res) {
  Users.find({}).then(function (data) {
    return res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error"
    });
  });
  /*
  		const user = users.find(user => user.name === req.body.name)
  		if (user == null) {
  			return res.status(400).send('Cannot find user')
  		}
  		try {
  			if(await bcrypt.compare(req.body.password, user.password)) {
  				res.send('Success')
  			} else {
  				res.send('Not Allowed')
  			}
  		} catch {
  			res.status(500).send()
  		}*/
};

exports.logout = function (req, res) {};
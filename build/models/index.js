"use strict";

var mongoose = require("mongoose");

var db = {};
db.mongoose = mongoose;

require('dotenv').config();

db.url = process.env.DB_URL;
db.users = require("./users")(mongoose);
module.exports = db;
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
require('dotenv').config();

db.url = process.env.DB_URL;
db.users = require("./User")(mongoose);

module.exports = db;
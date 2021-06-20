"use strict";

var users = require("../controllers/users");

var router = require("express").Router();

router.get("/", users.findAll);
router.post("/login", users.login);
router.put("/logout/:id", users.logout);
module.exports = router;
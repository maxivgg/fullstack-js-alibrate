"use strict";

var router = require("express").Router();

var usersRouter = require("./users");

router.use("/api/users", usersRouter);
module.exports = router;
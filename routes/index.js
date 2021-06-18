let router = require("express").Router();
const usersRouter = require("./users");

router.use("/api/users", usersRouter)

module.exports = router;
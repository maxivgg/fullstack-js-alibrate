const users = require("../controllers/users");
let router = require("express").Router();

router.get("/", users.findAll);
router.post("/login", users.login);
router.put("/logout/:id", users.logout);

module.exports = router;
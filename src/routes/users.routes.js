import { Router } from "express";
const router = Router();

const users = require("../controllers/users");

router.get("/", users.findAll);
router.post("/login", users.login);
router.put("/logout/:id", users.logout);

export default router;

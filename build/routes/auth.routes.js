import { Router } from "express";
var router = Router();
import * as authController from '../controllers/auth.controller.js';
import { checkExistsUsernameOrEmail } from '../middlewares/verifySignup.js';
router.post('/signup', checkExistsUsernameOrEmail, authController.signUp);
router.post('/signin', authController.signIn);
export default router;
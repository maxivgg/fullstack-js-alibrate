import { Router } from 'express';
const router = Router();

import * as authController from '../controllers/auth.controller.js';

router.post('/signUp', authController.signUp);
router.post('/signIn', authController.signIn);

export default router;
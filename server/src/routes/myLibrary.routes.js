import { Router } from 'express';
const router = Router();

import * as myLibraryController from '../controllers/myLibrary.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware, myLibraryController.getUserBooks);

export default router;

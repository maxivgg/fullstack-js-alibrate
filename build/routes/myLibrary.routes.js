import { Router } from 'express';
var router = Router();
import * as myLibraryController from '../controllers/myLibrary.controller.js';
router.post('/', myLibraryController.getUserBooks);
export default router;
import { Router } from 'express';
const router = Router();
import * as booksController from '../controllers/books.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

router.get('/', authMiddleware, booksController.getBooks);
router.post('/', authMiddleware, booksController.createBook);
router.get('/:bookId', authMiddleware, booksController.getBookById);
router.put('/:bookId', authMiddleware, booksController.updateBookById);
router.delete('/:bookId', authMiddleware, booksController.deleteBookById);

export default router;
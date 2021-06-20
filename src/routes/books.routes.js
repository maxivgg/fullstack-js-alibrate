import { Router } from "express";
const router = Router();
import * as booksController from '../controllers/books.controller';
import { verifyToken } from '../middlewares/verifyToken'; 

router.get('/', verifyToken, booksController.getBooks);
router.post('/', verifyToken, booksController.createBoook);
router.get('/:bookId', verifyToken, booksController.getBookById);
router.put('/:bookId', verifyToken, booksController.updateBookById);
router.delete('/:bookId', verifyToken, booksController.deleteBookById);

export default router;
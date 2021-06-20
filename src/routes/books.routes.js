import { Router } from "express";
const router = Router();
import * as booksController from '../controllers/books.controller';


router.get('/', booksController.getBooks);
router.post('/', booksController.createBoook);
router.get('/:bookId', booksController.getBookById);
export default router;
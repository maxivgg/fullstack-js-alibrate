import Book from '../models/Book.js';

export const createBoook = async (req, res) => {
	const { author, cover, title, description, genre, isbn13 } = req.body;
	const newBook = new Book({
		author, cover, title, description, genre, isbn13
	})
	const bookSaved = await newBook.save();
	res.status(201).json(bookSaved);
}

export const getBooks = async (req, res) => {
	const books = await Book.find();
	res.status(200).json(books)
}

export const getBookById = async (req, res) => {
	const book = await Book.findById(req.params.bookId);
	res.status(200).json(book)
}

export const updateBookById = async (req, res) => {
	const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
	res.status(200).json(updatedBook);
}

export const deleteBookById = async (req, res) => {
	const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
	res.status(204).json();
}



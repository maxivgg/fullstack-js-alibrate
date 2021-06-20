import Book from '../models/Book';

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

export const updateBookById = (req, res) => {

}

export const deleteBookById = (req, res) => {

}



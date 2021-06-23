import User from '../models/User.js';
import Book from '../models/Book.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getUserBooks = async (req, res) => {

  const { limit, status } = req.body;

  const user = await User.findById(req.userId);
  const booksMyLibrary = await Book.find({ _id: { $in: user[status] } }).limit(limit);

  res.status(200).json({ booksMyLibrary });

};
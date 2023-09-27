import User from '../models/User.js';
import Book from '../models/Book.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getUserBooks = async (req, res) => {

  const { limit, status, page } = req.body;
  const user = await User.findById(req.userId);

  const totalBooks = user[status].length;
  const skip = limit*(page-1); 

  const booksMyLibrary = await Book.find({ _id: { $in: user[status] } })
  .limit(limit)
  .skip(skip);

  res.status(200).json({ booksMyLibrary, user });

};
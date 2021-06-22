import User from '../models/User.js';
import Book from '../models/Book.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getUserBooks = async (req, res) => {

  const { limit, status } = req.body;
  const token = req.headers['x-access-token'];
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  req.userId = decoded.id;

  const user = await User.findById(req.userId);
  const booksMyLibrary = await Book.find({ _id: { $in: user.booksRead } }).limit(limit);

  res.status(200).json({ booksMyLibrary });

};
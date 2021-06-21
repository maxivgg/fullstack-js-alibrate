import User from '../models/User.js';
import Book from "../models/Book.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signUp = async (req, res) => {
	const { username, email, password } = req.body;
	const avatar = "https://graph.facebook.com/10225940148201268/picture?type=square";
	const newUser = new User({
		username,
		email,
		password: await User.encryptPassword(password),
		avatar,
	});

	const savedUser = await newUser.save();
	const token = jwt.sign({ id: savedUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
	res.status(201).json({ token, savedUser });
};

export const signIn = async (req, res) => {
	const { username, email, password } = req.body;

	const userFound = await User.findOne({ email: email });
	if (!userFound) return res.status(400).json({ message: "User not found" });
	userFound.booksReading = await Book.find({ _id: { $in: userFound.booksReading } }).limit(10);

	const matchPassword = await User.comparedPassword(password, userFound.password);

	if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' });

	const token = jwt.sign({ id: userFound._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_IN_TOKEN });

	console.log(userFound);
	res.json({ token });
}
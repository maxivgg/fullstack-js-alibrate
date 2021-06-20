import jwt from 'jsonwebtoken';
import User from '../models/User';
require('dotenv').config();

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];

		if (!token) return res.status(403).json({ message: "No token provided" });
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.userId = decoded.id;

		const user = await User.findById(req.userId);

		if (!user) return res.status(404).jsos({ message: 'No user found' })
		next();

	} catch (error) {
		return res.status(401).json({message: error})
	}
}
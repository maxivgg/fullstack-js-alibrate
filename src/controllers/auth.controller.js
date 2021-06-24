import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const signUp = async (req, res) => {
    const { username, email, password } = req.body;

    const usernameExists = await User.findOne({ username });
    if (usernameExists) return rees.status(400).json({ message: 'The user already exists' });

    const emailExists = await User.findOne({ email });
    if (emailExists) return res.status(400).json({ message: 'The email already exists' });

    const avatar = 'https://graph.facebook.com/10225940148201268/picture?type=square';
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
    const { username, password } = req.body;
    let userFound = null;
    if(validateEmail(username)){
        userFound = await User.findOne({ email: username });
    } else {
        userFound = await User.findOne({ username });
    }

    if (!userFound) return res.status(400).json({ message: 'User not found' });

    const matchPassword = await User.comparedPassword(password, userFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' });

    const token = jwt.sign({ id: userFound._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_IN_TOKEN });

    res.status(200).json({ token });
}
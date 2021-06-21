import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
	},
	booksReaded: [{
		ref: "Book",
		type: Schema.Types.ObjectId
	}],
	booksReading: [{
		ref: "Book",
		type: Schema.Types.ObjectId
	}],
	booksWantToRead: [{
		ref: "Book",
		type: Schema.Types.ObjectId
	}],
	booksAbandoned: [{
		ref: "Book",
		type: Schema.Types.ObjectId
	}],
}, {
	timestamps: true
})

userSchema.statics.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

userSchema.statics.comparedPassword = async (password, recivedPassword) => {
	return await bcrypt.compare(password, recivedPassword);
}

export default model('User', userSchema);
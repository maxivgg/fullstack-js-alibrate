import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: String,
    isbn13: String,
    genre: String,
    description: String,
    cover: String,
    author: String
})

export default model('Book', bookSchema)
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isbn13: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

export default model('Book', bookSchema)
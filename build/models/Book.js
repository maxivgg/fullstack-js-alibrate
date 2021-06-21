import mongoose from 'mongoose';
var Schema = mongoose.Schema,
    model = mongoose.model;
var bookSchema = new Schema({
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
});
export default model('Book', bookSchema);
import mongoose from 'mongoose';
var Schema = mongoose.Schema,
    model = mongoose.model;
var bookSchema = new Schema({
  title: String,
  isbn13: String,
  genre: String,
  description: String,
  cover: String,
  author: String
});
export default model('Book', bookSchema);
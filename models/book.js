const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  artist: { type: String},
  title: { type: String },
  rating: { type: String },
  blog: { type: String },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

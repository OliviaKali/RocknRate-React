const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: String, required: true },
  blog: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

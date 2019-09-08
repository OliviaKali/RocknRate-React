const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  artist: { type: String},
  blogger: { type: String },
  rating: { type: String },
  blog: { type: String },
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

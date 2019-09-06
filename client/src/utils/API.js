import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/blog");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      console.log(bookData)
    return axios.post("/api/blog/comments", bookData);
  },
  getArtist: function(artistData) {
    return axios.get("/api/blog", artistData)
  }
};

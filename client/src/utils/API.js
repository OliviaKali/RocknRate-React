import axios from "axios";

export default {
  // Gets all books
  getBlog: function() {
    return axios.get("/api/blog");
  },
  // Gets the book with the given id
  getBlog: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a book to the database
  saveBlog: function(blogData) {
      console.log(blogData)
    return axios.post("/api/blog/comments", blogData);
  }
};

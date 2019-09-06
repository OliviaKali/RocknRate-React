import axios from "axios";

export default {
  // Gets all blogs
  getBlog: function() {
    return axios.get("/api/blog");
  },
  // Gets the blog with the given id
  getBlogId: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the blog with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a blog to the database
  saveBlog: function(blogData) {
      console.log(blogData)
    return axios.post("/api/blog/comments", blogData);
  }
};

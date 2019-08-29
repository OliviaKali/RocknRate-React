import axios from "axios";
import keys from "../../../keys";
import Spotify from "node-spotify-api";
// var Spotify = require("node-spotify-api");


export default {
    searchArtist: function(id) {
        return axios.post("api/artist" + id); 
            let spotify = new Spotify(keys.spotify);
            spotify
    .search({ type: "artist", query: req.body.artist, limit: 3 })
    .then(function(response) {
      var artistName = response.artists.items[0].name;
      var artistGenres = response.artists.items[0].genres;
      var imageUrl = response.artists.items[0].images[0].url;
      var artistID = response.artists.items[0].id;

      var artist = {
        name: artistName,
        genres: artistGenres,
        image: imageUrl,
        id: artistID
      };
      res.json(artist);
    })
    .catch(function(err) {
      console.log(err);
    });
        
    }


  // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
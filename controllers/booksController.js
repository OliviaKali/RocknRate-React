const db = require("../models");
require("dotenv").config();
var keys = require("../keys");
var Spotify = require("node-spotify-api");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // console.log({artist: artist})
    db.Book
    // .find(req.query)
      .find({artist: req.body.artist})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // User.find({ nameFirst: 'John' });
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArtist: function(req, res) {
    var spotify = new Spotify(keys.spotify);

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
};

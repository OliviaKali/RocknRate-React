const db = require("../models");
require("dotenv").config();
var keys = require("../keys");
var Spotify = require("node-spotify-api");

// Defining methods for the blogController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({artist: req.body.artist})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  }
};

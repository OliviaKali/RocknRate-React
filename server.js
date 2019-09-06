var express = require("express");
const mongoose = require("mongoose");
var path = require('path');
// var cors = require('cors');

var apiRoutes = require("./routes/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3001;

// app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./routes/api");
const routes1 = require("./routes/index")
app.use(routes);
app.use(routes1);

mongoose.connect("mongodb://localhost/reactreadinglist", { useNewUrlParser: true });

app.use(apiRoutes)

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


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
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

const routes = require("./routes/api");
// const routes1 = require("./routes/index")
app.use(routes);
// app.use(routes1);

mongoose.connect(process.env.MONGODB_URI || "mongodb://root:password1@ds031571.mlab.com:31571/heroku_x1c5cqgx");

app.use(apiRoutes)

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


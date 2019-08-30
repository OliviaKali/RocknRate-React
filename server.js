var express = require("express");
// const passport = require("passport");
// const SpotifyStrategy = require('passport-spotify').Strategy;
var path = require('path');

var apiRoutes = require("./routes/apiRoutes")

var app = express();
var PORT = process.env.PORT || 3001;

// // // Requiring our models for syncing
// // var db = require("./app/models/blog");

// // // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());


// // // Static directory

app.use(express.static("client/build"));

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });


// // // Routes

require("./routes/html-routes")(app);
// // require("./app/routes/api-blogRoutes.js")(app);
// // require('./app/routes/artist-api-routes.js')(app);

app.use(apiRoutes)

// // // Syncing our sequelize models and then starting our Express app
// // db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// // });

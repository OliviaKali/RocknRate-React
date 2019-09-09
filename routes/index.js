const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
// }

// else {
//   app.use(express.static(path.join(__dirname, '/client/public')));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   });
// }

module.exports = router;

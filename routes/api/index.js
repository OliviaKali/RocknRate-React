const router = require("express").Router();
const blogRoutes = require("./blogs");

// Blog routes
router.use("/blog", blogRoutes);

module.exports = router;

const router = require("express").Router();
const blogRoutes = require("./books");

// Book routes
router.use("/blog", blogRoutes);

module.exports = router;

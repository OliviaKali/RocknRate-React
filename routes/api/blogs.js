const router = require("express").Router();
const blogController = require("../../controllers/blogsController");

// Matches with "/api/blog"
router.route("/")
  .post(blogController.findAll)

router.route("/comments")
 .post(blogController.create);

// Matches with "/api/blog/:id"
router
  .route("/:id")
  .get(blogController.findById)

module.exports = router;

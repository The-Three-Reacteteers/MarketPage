const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/")
  .get(booksController.getWishlist)
  .post(booksController.addToWishlist);
router.route("/:id").delete(booksController.removeWishlist);

module.exports = router;

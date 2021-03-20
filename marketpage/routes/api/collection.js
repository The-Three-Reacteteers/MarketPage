const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/")
  .get(booksController.getCollection)
  .post(booksController.addToCollection);
router.route("/:id").delete(booksController.removeCollection);

module.exports = router;

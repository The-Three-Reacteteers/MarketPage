const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/search/:query").get(booksController.search);
router.route("/get-collection").get(booksController.getCollection);
router.route("/add-collection").post(booksController.addTOCollection);

module.exports = router;
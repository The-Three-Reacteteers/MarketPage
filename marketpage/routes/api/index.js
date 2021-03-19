const router = require("express").Router();
const authRoutes = require("./auth");
const collectionRoutes = require("./collection");
const wishlistRoutes = require("./wishlist");

// Auth Routes
router.use("/auth", authRoutes);
// Collection Routes
router.use("/collection", collectionRoutes);
// wishlist Routes
router.use("/wishlist", wishlistRoutes);


module.exports = router;
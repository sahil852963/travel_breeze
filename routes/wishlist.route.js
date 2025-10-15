const express = require('express');
const verifyUser = require('../middleware/verifyuser');

const wishlistController = require('../controllers/wishlistController');

const { createWishListHandler, deleteWishListHandler, getWishListHandler } = wishlistController;

const router = express.Router();

router.route("/").post(verifyUser, createWishListHandler);

router.route("/:id").delete(verifyUser, deleteWishListHandler);

router.route("/").get(verifyUser, getWishListHandler)

module.exports = router;
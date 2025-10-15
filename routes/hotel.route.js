const express = require('express');
const hotelController = require('../controllers/hotelController');

const { hotelHandler } = hotelController;
const router = express.Router();

router.route("/").get(hotelHandler);
module.exports = router;
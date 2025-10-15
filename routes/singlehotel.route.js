const express = require('express');
const hotelController = require('../controllers/hotelController');

const { singleHotelHandler } = hotelController;

const router = express.Router();

const Hotel = require('../model/hotel.model');

router.route("/:id").get(singleHotelHandler);

module.exports = router;
const express = require('express');

const router = express.Router();

const Hotel = require('../model/hotel.model');
const hotels = require('../data/hotels')

router.route("/").post(async (req, res) => {
    try {
        await Hotel.deleteMany({})
        const hotelInDB = await Hotel.insertMany(hotels.data)
        res.json(hotelInDB);
    } catch (err) {
        console.log(err)
        res.json({ message: "could not inserted in DB" });
    }
});

module.exports = router;

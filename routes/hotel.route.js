const express = require('express');
// const hotels = require("../data/hotels.js");
const Hotel = require('../model/hotel.model');
const router = express.Router();

router.route("/").get(async (req, res) => {
    // res.json(hotels.data);
    const hotelCategory =  req.query.category;
    try {
        let hotels;
        if(hotelCategory){
            hotels = await Hotel.find({ category: hotelCategory });
        } else {
            hotels = await Hotel.find({});
        }
        hotels ? res.json(hotels) : res.status(404).json({ message: "No data Found"});
    } catch (err) {
        console.log(err);
        res.json({ message: "Something went wrong"})
    }
})
module.exports = router;
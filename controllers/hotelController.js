const Hotel = require('../model/hotel.model');

const singleHotelHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel);
    } catch (err) {
        res.json({ message: "Could not found data" });
    }
}

const hotelHandler = async (req, res) => {
    // res.json(hotels.data);
    const hotelCategory = req.query.category;
    try {
        let hotels;
        if (hotelCategory) {
            hotels = await Hotel.find({ category: hotelCategory });
        } else {
            hotels = await Hotel.find({});
        }
        hotels ? res.json(hotels) : res.status(404).json({ message: "No data Found" });
    } catch (err) {
        console.log(err);
        res.json({ message: "Something went wrong" })
    }
}

module.exports = { singleHotelHandler, hotelHandler };
const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
    hotelId: { type: String, required: true }
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;
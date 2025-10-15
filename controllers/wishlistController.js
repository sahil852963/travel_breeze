const WishList = require('../model/wishlist.model');

const createWishListHandler = async (req, res) => {
    const newWishList = new WishList(req.body);

    try {
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

const deleteWishListHandler = async (req, res) => {
    try {
        await WishList.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Wishlist deleted Successfully!" });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

const getWishListHandler = async (req, res) => {
    try {
        const wishList = await WishList.findOne({});
        wishList ? res.json(wishList) : res.json({ message: "no Wishlist found" });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

module.exports = { createWishListHandler, deleteWishListHandler, getWishListHandler };
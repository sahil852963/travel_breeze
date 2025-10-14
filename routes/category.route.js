const express = require('express');

const router = express.Router();

const Category = require('../model/category.model');

router.route("/").get(async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
        // categories ? res.json(categories) : res.status(404).json({ message: "no data Found"}); 
    } catch(err) {
        res.status(404).json({ message: "Could not found data"});
    }
})

module.exports = router;
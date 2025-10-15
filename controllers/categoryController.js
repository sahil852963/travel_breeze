const Category = require('../model/category.model');

const categoryHandler = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
        // categories ? res.json(categories) : res.status(404).json({ message: "no data Found"}); 
    } catch (err) {
        res.status(404).json({ message: "Could not found data" });
    }
}

module.exports = categoryHandler;
const express = require('express');

const categoryHandler = require('../controllers/categoryController');

const router = express.Router();

router.route("/").get(categoryHandler)

module.exports = router;
const express = require('express');
const signUpHandler = require('../controllers/signupController');
const loginHandler = require('../controllers/loginController');

const router = express.Router();

router.route("/register").post(signUpHandler);

router.route('/login').post(loginHandler);

module.exports = router;
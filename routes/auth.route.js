const express = require('express');
const JsonWebToken = require('jsonwebtoken');

const CryptoJS = require('crypto-js');

const router = express.Router();
const User = require('../model/user.model');

router.route("/register").post(async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        });

        const savedUser = await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.json({ message: "Error in registering user" });
    }
});

router.route('/login').post(async (req, res) => {
    try {
        const user = await User.findOne({ number: req.body.number });
        !user && res.status(402).json({ message: "Incorrect number" });

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        decryptedPassword !== req.body.password && res.status(403).json({ message: "Incorrect Password" });

        const { password, ...rest } = user._doc;
        const accessToken = JsonWebToken.sign({ username: user.username }, process.env.ACCESS_TOKEN);

        res.json({ ...rest, accessToken });
    } catch (err) {
        console.log(err)
        res.json({ message: "Error in login user" });
    }
})

module.exports = router;
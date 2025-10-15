const CryptoJS = require('crypto-js');
const User = require('../model/user.model');

const signUpHandler = async (req, res) => {
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
}

module.exports = signUpHandler;
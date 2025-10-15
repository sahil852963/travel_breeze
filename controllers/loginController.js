const CryptoJS = require('crypto-js');
const User = require('../model/user.model');
const JsonWebToken = require('jsonwebtoken');

const loginHandler = async (req, res) => {
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
}

module.exports = loginHandler;
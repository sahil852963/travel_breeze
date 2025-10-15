const express = require('express');
const mongoose = require('mongoose');
const hotelRouter = require('./routes/hotel.route');
const hotelDataAddedToDBrouter = require('./routes/dataimport.route');
const categoryDataAddedToDBrouter = require('./routes/categoryimport.route');
const categoryDataRouter = require('./routes/category.route');
const singleHotelRouter = require('./routes/singlehotel.route');
const authRouter = require('./routes/auth.route');
const wishListRouter = require('./routes/wishlist.route');
const cors = require('cors');

const dotEnv = require('dotenv');
dotEnv.config();

const connectDB = require('./config/dbconfig');

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 3500;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/categoryimport", categoryDataAddedToDBrouter);
app.use("/api/dataimport", hotelDataAddedToDBrouter);

app.use('/api/auth', authRouter);
app.use('/api/hotels', singleHotelRouter);
app.use('/api/categories', categoryDataRouter);
app.use("/api/hotels", hotelRouter);
app.use('/api/wishlist', wishListRouter);

connectDB();

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server is Up and Running");
    });
});

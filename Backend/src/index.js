require('dotenv').config();

const express = require('express');
const app = express();

// mongoose connection
const {connectDB} = require("./DB/connect");
connectDB(`${process.env.MONGODB_URI}`);

// Middleware Imports
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Middleware
app.use(express.json({
    limit: '16kb',
}));
app.use(express.urlencoded({ 
    limit: "16kb",
    extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors());

// Route imports
const userRoute = require('./routes/user.route');

// Routes
app.use('/user', userRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
})
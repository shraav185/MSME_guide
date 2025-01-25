const mongoose = require('mongoose');
const express = require('express');
const app = express();

async function connectDB(url) {
    try {
        await mongoose.connect(url);
        app.on("error", (err) => {
            console.log("Error in express", err);
        })
        console.log("mongodb connected successfully");
    } catch (error) {
        console.log("Error in connecting with database", error);
    }
}

module.exports = { connectDB }
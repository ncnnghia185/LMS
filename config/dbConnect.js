const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;

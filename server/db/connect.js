const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

MediaQueryList.exports = connectDB;

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5500;

app.get("/", (req, res) => {
  res.send("to do list");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

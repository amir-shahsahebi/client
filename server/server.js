const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("to do list");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();

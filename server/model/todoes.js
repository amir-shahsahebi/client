const mongoose = require("mongoose");

const ToDoesSchema = new mongoose.Schema({
  title: String,
  task: String,
  favorite: String,
  addedTime: Number,
  finishTime: Number,
  status: String,
});

module.exports = mongoose.model("ToDoes", ToDoesSchema);

const express = require("express");

const {
  getAllToDoes,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../conrtollers/toDo");

const router = express.Router();

router.get("/", getAllToDoes);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;

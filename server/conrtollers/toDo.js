const ToDoes = require("../model/ToDoes");

const getAllToDoes = async (req, res) => {
  try {
    const toDoes = await ToDoes.find({});
    res.status(200).json({ toDoes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id: toDoID } = req.params;
    const toDo = await ToDoes.find({ _id: toDoID });
    res.status(200).json({ toDo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  const newTodo = req.body;
  try {
    const toDo = await ToDoes.create(newTodo);
    res.status(201).json({ toDo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const toDo = req.body;
  try {
    const updatedToDo = await ToDoes.findByIdAndUpdate(
      { _id },
      { ...toDo, _id },
      { new: true }
    );
    res.status(200).json({ updatedToDo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  const { id: toDoID } = req.params;
  try {
    const toDo = await ToDoes.findByIdAndDelete({ _id: toDoID });
    res.status(200).json({ toDo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// toDoID must be _id

module.exports = {
  getAllToDoes,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};

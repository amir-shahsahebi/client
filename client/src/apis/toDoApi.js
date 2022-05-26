import axios from "axios";

const baseUrl = "http://localhost:5500/todoes/";

export const getAllToDoes = async () => {
  try {
    const toDoes = await axios.get(baseUrl);
    return toDoes;
  } catch (error) {
    console.log(error);
  }
};
export const updateTodo = async (id, toDoDetail) => {
  try {
    const toDo = await axios.patch(`${baseUrl}/${id}`, toDoDetail);
    return toDo;
  } catch (error) {
    console.log(error);
  }
};
export const createTodo = async (toDoDetail) => {
  try {
    const toDo = await axios.post(baseUrl, toDoDetail);
    return toDo;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = async (id) => {
  try {
    const toDo = await axios.delete(`${baseUrl}/${id}`);
    return toDo;
  } catch (error) {
    console.log(error);
  }
};

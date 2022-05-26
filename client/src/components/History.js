import "./accordion.css";
import { Accordion, Button } from "react-bootstrap";
import { deleteTodo, updateTodo } from "../apis/toDoApi";
import { useNavigate } from "react-router-dom";
import ModalEdited from "./ModalEdited";
const History = ({ allToDoes, term }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteTodo(id);
    navigate(0);
  };
  const accordionList =
    allToDoes &&
    allToDoes
      .filter((todo) =>
        term ? todo.title.includes(term) || todo.task.includes(term) : todo
      )
      .filter((todo) => todo.status === "yes")
      .map((toDo, index) => {
        // console.log(toDo);
        const addedDate = new Date(Number(toDo.addedTime)).toLocaleString();
        return (
          <Accordion.Item
            className="accordion-container"
            eventKey={index}
            key={index}
          >
            <div
              onClick={() => {
                toDo.favorite !== "yes"
                  ? updateTodo(toDo._id, { ...toDo, favorite: "yes" })
                  : updateTodo(toDo._id, { ...toDo, favorite: "no" });
                navigate(0);
              }}
              className="star2"
              style={
                toDo.favorite === "yes" ? { color: "gold" } : { color: "black" }
              }
            >
              <i className="far fa-star"></i>
            </div>
            <i
              className="delete fas fa-trash"
              onClick={() => handleDelete(toDo._id)}
            ></i>
            <Accordion.Header>
              <span className={toDo.favorite === "yes" ? "bold" : ""}>
                {toDo.title}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="task-container">
                {toDo.task}
                <p className="date">
                  {toDo.addedTime && `added in ${addedDate}`}
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        );
      });
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {accordionList}
      </Accordion>
    </div>
  );
};

export default History;

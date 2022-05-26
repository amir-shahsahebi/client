import "./accordion.css";
import { Accordion, Button } from "react-bootstrap";
import { deleteTodo, updateTodo } from "../apis/toDoApi";
import { useNavigate } from "react-router-dom";
import ModalEdited from "./ModalEdited";
const AccordionEdited = ({ allToDoes, term }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteTodo(id);
    navigate(0);
  };
  // console.log(term);
  const accordionList =
    allToDoes &&
    allToDoes
      .filter((todo) =>
        term ? todo.title.includes(term) || todo.task.includes(term) : todo
      )
      .filter((todo) => todo.status !== "yes")
      .map((toDo, index) => {
        const defferTime = () => {
          const date1 = Date.now();
          // console.log("date1 is", date1);
          const date2 = Number(toDo.finishTime);
          // console.log("date2 is", date2);
          const date3 = Number(toDo.addedTime);
          // console.log("date3 is", date3);
          if (date2 === 0) return null;
          const diffInMS = date2 + date3 - date1;
          const diffInDays = Math.round(diffInMS / (1000 * 60 * 60 * 24));
          const diffInHours = Math.round(diffInMS / (1000 * 60 * 60));
          const diffInMinutes = Math.round(diffInMS / (1000 * 60));
          const diffInSeconds = Math.round(diffInMS / 1000);
          // console.log(diffInMS + " milliseconds");
          // console.log(diffInDays + " days");
          // console.log(diffInHours + " hours");
          // console.log(diffInMinutes + " minutes");
          // console.log(toDo);
          if (diffInMS <= 0) return "your target time has been ended";
          if (diffInHours < 1 && diffInMinutes < 1)
            return `remaining time: about ${diffInSeconds} seconds`;
          if (diffInDays) return `remaining time: about ${diffInDays} days`;
          if (diffInHours <= 24 && diffInHours >= 1)
            return `remaining time: about ${diffInHours} hours`;
          if (diffInHours < 1)
            return `remaining time: about ${diffInMinutes} minutes`;
        };
        const calculatedDiffTime = defferTime();
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
              className="star"
              style={
                toDo.favorite === "yes" ? { color: "gold" } : { color: "black" }
              }
            >
              <i className="far fa-star"></i>
            </div>
            <i
              onClick={() => {
                updateTodo(toDo._id, { ...toDo, status: "yes" });
                navigate(0);
              }}
              className="completed fas fa-check"
            ></i>
            <div className="edit">
              <ModalEdited
                TodoCurrent={toDo}
                text={null}
                icon={<i className="far fa-edit"></i>}
                variant="outline-secondary"
                size="sm"
                newTodo={false}
              />
            </div>
            <i
              className="delete fas fa-trash"
              onClick={() => handleDelete(toDo._id)}
            ></i>
            <Accordion.Header>
              <span
                className={toDo.favorite === "yes" ? "bold" : ""}
                style={
                  calculatedDiffTime === "your target time has been ended"
                    ? { color: "red" }
                    : null
                }
              >
                {toDo.title}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="task-container">
                {toDo.task}
                <p className="date">
                  {toDo.addedTime && `added in ${addedDate}`}
                </p>
                <p className="date">{toDo.finishTime && calculatedDiffTime}</p>
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

export default AccordionEdited;

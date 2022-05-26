import "./accordion.css";
import { Accordion, Button } from "react-bootstrap";
import { deleteTodo } from "../apis/toDoApi";
import { useNavigate } from "react-router-dom";
import ModalEdited from "./ModalEdited";
const AccordionEdited = ({ allToDoes }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteTodo(id);
    navigate(0);
  };
  const accordionList =
    allToDoes &&
    allToDoes.map((toDo, index) => {
      const defferTime = (fTime) => {
        const date1 = Date.now();
        // console.log(date1);
        const date2 = Number(fTime);
        // console.log(date2);
        const diffInMS = date1 - date2;
        const diffInDays = Math.ceil(diffInMS / (1000 * 60 * 60 * 24));
        const diffInHours = Math.ceil(diffInMS / (1000 * 60 * 60));
        const diffInMinutes = Math.ceil(diffInMS / (1000 * 60));
        // console.log(diffInMS + " milliseconds");
        // console.log(diffInDays + " days");
        // console.log(diffInHours + " hours");
        // console.log(diffInMinutes + " minutes");
        if (diffInMS <= 0) return "your target time has been ended";
        if (diffInDays) return `remaining time: about ${diffInHours} days`;
        if (diffInHours <= 24 && diffInHours >= 1)
          return `remaining time: about ${diffInHours} hours`;
        if (diffInHours < 1)
          return `remaining time: about ${diffInMinutes} minutes`;
      };

      const calculatedDiffTime = defferTime(toDo.finishTime);
      const addedDate = new Date(Number(toDo.addedTime)).toLocaleString();
      return (
        <Accordion.Item
          className="accordion-container"
          eventKey={index}
          key={index}
        >
          <div className="star">
            <i className="bi bi-star"></i>
          </div>
          <div className="edit">
            <ModalEdited
              TodoCurrent={toDo}
              text="Edit"
              variant="outline-secondary"
              size="sm"
              newTodo={false}
            />
          </div>
          <Button
            className="delete"
            size="sm"
            variant="outline-danger"
            onClick={() => handleDelete(toDo._id)}
          >
            Delete
          </Button>
          <Accordion.Header
            style={
              calculatedDiffTime === "your target time has been ended"
                ? { color: "red" }
                : null
            }
          >
            {toDo.title}
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

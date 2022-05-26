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
      return (
        <Accordion.Item
          className="accordion-container"
          eventKey={index}
          key={index}
        >
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
          <Accordion.Header>{toDo.title}</Accordion.Header>
          <Accordion.Body>{toDo.task}</Accordion.Body>
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

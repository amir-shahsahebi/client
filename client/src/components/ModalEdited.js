import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateTodo } from "../apis/toDoApi";
import { createTodo } from "../apis/toDoApi";

function ModalEdited({ text, variant, size, TodoCurrent, newTodo }) {
  const navigate = useNavigate();
  const [toDo, setTodo] = useState({ TodoCurrent });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    newTodo && createTodo(toDo);
    console.log(toDo);
    !newTodo && updateTodo(TodoCurrent._id, toDo);
    setShow(false);
    navigate(0);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={variant} size={size} onClick={handleShow}>
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding new Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>ToDo Title</Form.Label>
              <Form.Control
                onChange={(e) => setTodo({ ...toDo, title: e.target.value })}
                type="text"
                placeholder={
                  TodoCurrent.title ? TodoCurrent.title : "enter a title"
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="task">
              <Form.Label>Add your Task</Form.Label>
              <Form.Control
                onChange={(e) => setTodo({ ...toDo, task: e.target.value })}
                as="textarea"
                rows={3}
                placeholder={
                  TodoCurrent.title ? TodoCurrent.task : "enter a title"
                }
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalEdited;

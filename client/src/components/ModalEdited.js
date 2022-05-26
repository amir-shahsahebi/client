import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateTodo } from "../apis/toDoApi";
import { createTodo } from "../apis/toDoApi";
import Timer from "./Timer";

function ModalEdited({ text, variant, size, TodoCurrent, newTodo }) {
  const navigate = useNavigate();
  const [toDo, setTodo] = useState({ TodoCurrent });
  const [show, setShow] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  // newTodo && setTodo({ ...toDo, startedTime: Date.now() });

  const handleTime = (timer) => {
    if (timer.days === 0 && !time.hours === 0 && !time.days === 0) {
      console.log("nothing");
      return;
    }
    const days = time.days ? time.days : 0;
    const hours = time.days ? time.hours : 0;
    const minutes = time.days ? time.days : 0;
    const calculatedTime =
      (Number(days) * 24 * 60 + Number(hours) * 60 + Number(minutes)) *
        60 *
        1000 +
      Date.now();
    setTodo({ ...toDo, finishTime: calculatedTime });
  };

  // newTodo && setTodo({ ...toDo, addedTime: new Date() });
  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    newTodo && createTodo(toDo);
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
                onChange={(e) =>
                  setTodo({
                    ...toDo,
                    title: e.target.value,
                    addedTime: Date.now(),
                  })
                }
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
                onChange={(e) =>
                  setTodo({
                    ...toDo,
                    task: e.target.value,
                  })
                }
                as="textarea"
                rows={3}
                placeholder={
                  TodoCurrent.title ? TodoCurrent.task : "enter a title"
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="task">
              <Form.Label>Add a Timer</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    onChange={(e) => {
                      setTime({ ...time, days: e.target.value });
                      handleTime(time);
                    }}
                    placeholder="Days"
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => {
                      setTime({ ...time, hours: e.target.value });
                      handleTime(time);
                    }}
                    placeholder="Hours"
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={(e) => {
                      setTime({ ...time, minutes: e.target.value });
                      handleTime(time);
                    }}
                    placeholder="Minutes"
                  />
                </Col>
              </Row>
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

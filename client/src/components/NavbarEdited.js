import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import ModalEdited from "./ModalEdited";

const NavbarEdited = ({ handleInput }) => {
  const TodoCurrent = {
    title: "",
    task: "",
    favorite: "",
    addedTime: null,
    finishTime: null,
    status: "no",
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Welcome to ToDoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ModalEdited
                TodoCurrent={TodoCurrent}
                text="Add new Todo"
                variant="outline-dark"
                size="sm"
                newTodo={true}
              />
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={(e) => handleInput(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarEdited;

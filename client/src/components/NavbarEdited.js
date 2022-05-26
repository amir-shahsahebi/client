import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import ModalEdited from "./ModalEdited";

const NavbarEdited = () => {
  const TodoCurrent = {
    title: "",
    task: "",
    favorite: "",
    addedTime: "",
    finishTime: "",
    status: "",
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">History</Nav.Link>
              <ModalEdited
                TodoCurrent={TodoCurrent}
                text="Add new Todo"
                variant="outline-dark"
                size="sm"
                newTodo={true}
              />
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarEdited;

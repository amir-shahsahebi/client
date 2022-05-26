import { useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";

const Timer = (handleTime) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  //   handleTime(time);
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header variant="bg-success">Add a timer</Accordion.Header>
        <Accordion.Body>
          <Form>
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
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Timer;

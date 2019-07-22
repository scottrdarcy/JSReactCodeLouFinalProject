import React from "react";
import { Button, Table, Container, Row, Col, Card } from "react-bootstrap";

//make some type of date fuction that can be called further down the page

function JournalView(journal, updateMode, removeEntry) {
  const goToUpdateEntry = () => {
    updateMode(journal.id);
  };

  const remove = () => {
    removeEntry(journal.id);
  };

  const cardStyle = {
    margin: "10px"
  };

  const headerStyle = {
    float: "right"
  };

  const buttonStyle = {
    float: "right"
  };

  const rowStyle = {
    margin: "2px"
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Container>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}> Date:</h5>
            </Col>
            <Col xs="4">
              <label>{new Date().toTimeString()}</label>
            </Col>
            <Col xs="4">
              <Button style={buttonStyle} onClick={remove}>
                Remove
              </Button>
            </Col>
          </Row>

          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Topic:</h5>
            </Col>
            <Col xs="4">
              <label>{journal.topic}</label>
            </Col>
            <Col xs="4">
              <Button style={buttonStyle} onClick={goToUpdateEntry}>
                Edit
              </Button>
            </Col>
          </Row>

          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Description:&nbsp;</h5>
            </Col>
            <Col xs="8">
              <label>{journal.entry}</label>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Created:</h5>
            </Col>
            <Col xs="4">
              <label>{journal.created}</label>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Updated:</h5>
            </Col>
            <Col xs="4">
              <label>{journal.updated}</label>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default JournalView;

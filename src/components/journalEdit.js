import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Col,
  Card,
  Row,
  Container
} from "react-bootstrap";

function JournalEdit(journal, entryViewMode, saveentry) {
  const cancel = () => {
    entryViewMode(journal.id);
  };

  const save = () => {
    saveentry(editJournal);
  };

  const editJournal = journal;

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
              <h5 style={headerStyle}>Date:</h5>
            </Col>
            <Col xs="4">
              {/* <InputGroup>
                <FormControl
                  placeholder="Date"
                  aria-label="Date"
                  aria-describedby="basic-addon2"
                  //defaultValue={Date Event}
                  onChange={function(changedEvent) {
                    //date funtioneditPrediction.symbol = changedEvent.target.value;
                  }}
                />
              </InputGroup> */}
            </Col>
            <Col xs="4">
              <Button style={buttonStyle} onClick={save}>
                Save
              </Button>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Topic:</h5>
            </Col>
            <Col xs="4">
              <InputGroup>
                <FormControl
                  placeholder="Topic"
                  aria-label="Topic"
                  aria-describedby="basic-addon2"
                  defaultValue={journal.topic}
                  onChange={function(changedEvent) {
                    editJournal.topic = changedEvent.target.value;
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs="4">
              {/* <Button style={buttonStyle} onClick={cancel}>
                Cancel
              </Button> */}
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Description:&nbsp;</h5>
            </Col>
            <Col xs="8">
              <InputGroup>
                <FormControl
                  placeholder="Description"
                  aria-label="Description"
                  aria-describedby="basic-addon2"
                  defaultValue={journal.entry}
                  onChange={function(changedEvent) {
                    editJournal.entry = changedEvent.target.value;
                  }}
                />
              </InputGroup>
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

export default JournalEdit;

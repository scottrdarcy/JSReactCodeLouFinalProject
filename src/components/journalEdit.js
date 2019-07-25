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

/*  This function has three parameters to represent the three views that will be rendered depending on what buttons    */

function JournalEdit(journal, entryViewMode, saveentry) {
  const cancel = () => {
    entryViewMode(journal.id);
  };

  const save = () => {
    saveentry(editJournal);
  };

  const editJournal = journal;

  /* The following three variables are for styling*/
  const cardStyle = {
    margin: "10px"
  };

  const headerStyle = {
    float: "left"
  };

  const buttonStyle = {
    float: "right"
  };

  const rowStyle = {
    margin: "2px"
  };

  /* This returns the journal edit component*/
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Container>
          <Row style={rowStyle}>
            <Col sm="4" md="4" lg="4">
              <h5 style={headerStyle}>Topic:</h5>
            </Col>
            <Col className="column" sm="8" md="4" lg="4">
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
            <Col className="buttonCol" sm="0" md="4" lg="4">
              <Button style={buttonStyle} onClick={save}>
                Save
              </Button>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col sm="4">
              <h5 style={headerStyle}>Description:&nbsp;</h5>
            </Col>
            <Col sm="8">
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
            <Col sm="4">
              <h5 style={headerStyle}>Created:</h5>
            </Col>
            <Col sm="8">
              <label>{journal.created}</label>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col sm="4">
              <h5 style={headerStyle}>Updated:</h5>
            </Col>
            <Col sm="8">
              <label>{journal.updated}</label>
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col>
              <Button className="center" onClick={save}>
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default JournalEdit;

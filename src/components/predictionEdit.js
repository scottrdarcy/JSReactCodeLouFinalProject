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

function PredictionEdit(prediction, viewMode, savePrediction) {
  const cancel = () => {
    viewMode(prediction.id);
  };

  const save = () => {
    savePrediction(editPrediction);
  };

  const editPrediction = prediction;

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
              <h5 style={headerStyle}>Stock Symbol:</h5>
            </Col>
            <Col xs="4">
              <InputGroup>
                <FormControl
                  placeholder="Stock Symbol"
                  aria-label="Stock Symbol"
                  aria-describedby="basic-addon2"
                  defaultValue={prediction.symbol}
                  onChange={function(changedEvent) {
                    editPrediction.symbol = changedEvent.target.value;
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs="4">
              <Button style={buttonStyle} onClick={save}>
                Save
              </Button>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Action:</h5>
            </Col>
            <Col xs="4">
              <InputGroup>
                <FormControl
                  placeholder="Action"
                  aria-label="Action"
                  aria-describedby="basic-addon2"
                  defaultValue={prediction.action}
                  onChange={function(changedEvent) {
                    editPrediction.action = changedEvent.target.value;
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
              <h5 style={headerStyle}>Explanation:&nbsp;</h5>
            </Col>
            <Col xs="8">
              <InputGroup>
                <FormControl
                  placeholder="Explanation"
                  aria-label="Explanation"
                  aria-describedby="basic-addon2"
                  defaultValue={prediction.entry}
                  onChange={function(changedEvent) {
                    editPrediction.entry = changedEvent.target.value;
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
              <label>{prediction.created}</label>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Updated:</h5>
            </Col>
            <Col xs="4">
              <label>{prediction.updated}</label>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PredictionEdit;

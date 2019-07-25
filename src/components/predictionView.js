import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function PredictionView(prediction, editMode, remove) {
  const goToEditMode = () => {
    editMode(prediction.id);
  };

  const removePrediction = () => {
    remove(prediction.id);
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
              <h5 style={headerStyle}>Stock Symbol:</h5>
            </Col>
            <Col xs="4">
              <label>{prediction.symbol}</label>
            </Col>
            <Col className="buttonCol" xs="4">
              <Button style={buttonStyle} onClick={removePrediction}>
                Remove
              </Button>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Topic:</h5>
            </Col>
            <Col xs="4">
              <label>{prediction.action}</label>
            </Col>
            <Col className="buttonCol"xs="4">
              <Button style={buttonStyle} onClick={goToEditMode}>
                Edit
              </Button>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs="4">
              <h5 style={headerStyle}>Explanation:&nbsp;</h5>
            </Col>
            <Col xs="8">
              <label>{prediction.entry}</label>
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
          <Row className="buttonRow">
            <Col xs="5">
              <Button className="floated" onClick={removePrediction}>
                Remove
              </Button>
            </Col>
            
              <Button className="floated" onClick={goToEditMode}>
                Edit
              </Button>    
          </Row> 
        </Container>
      </Card.Body>
    </Card>

    /* <div class="predict">
      <Table style="position:relative">
        <tr>
          <td>
            <h2>Stock Symbol: News: Action: Trend:</h2>
          </td>
        </tr>


        <tr style="position:absolute; right:20px;">
          {" "}
          <Button class=".button" onClick="goToEditMode">
            Edit
          </Button>
          <Button class=".button">Remove</Button>
        </tr>
      </Table>
      <table>
        <tr>
          <th>Explanation:</th>
        </tr>
        <tr>
          <td />
        </tr>
      </table>

      <table>
        <tr>
          <th>Date Created:</th>
        </tr>
        <tr>
          <td>Date Updated:</td>
        </tr>
      </table>
    </div> */
  );
}

export default PredictionView;

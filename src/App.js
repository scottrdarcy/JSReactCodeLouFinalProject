import React, { Root, Component } from "react";
import {
  Container,
  Dropdown,
  Form,
  Button,
  Jumbotron,
  Col,
  Row
} from "react-bootstrap";
import "./App.css";

const buttonhome = {
  margin: "2px"
};
const buttonstyle = {
  display: 'flex',
   justifyContent: 'center'
};

function App() {
  return (
    <Container>
      <Jumbotron>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Stock Symbol:</Form.Label>
            <Form.Control type="email" placeholder="AMZN" />
          </Form.Group>

          <Button style={buttonhome}>Buy Now</Button>
          <Button style={buttonhome}>30 Days</Button>
          <Button style={buttonhome}>60 Days</Button>
          <Button style={buttonhome}>90 Days</Button>
          <Button style={buttonhome}>Hold</Button>
          <Button style={buttonhome}>Sell</Button>
          <Button style={buttonhome}>Short</Button>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Explain Reasoning of Selection:</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
        </Form>

        <Row>
          <Col>
            <Button style={buttonstyle}>Sumbit</Button>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;

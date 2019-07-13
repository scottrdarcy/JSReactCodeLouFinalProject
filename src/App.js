import logo from "./logo.svg";
import React, { Root, Component } from "react";
import { Container, Dropdown, Form, Button, Jumbotron } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Jumbotron>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Stock Symbol</Form.Label>
            <Form.Control type="email" placeholder="AMZN" />
          </Form.Group>

          <Button>Buy Now</Button>
          <Button>30 Days</Button>
          <Button>60 Days</Button>
          <Button>90 Days</Button>
          <Button>Hold</Button>
          <Button>Sell</Button>
          <Button>Short</Button>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Explain Reasoning of Selection:</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
        </Form>
      </Jumbotron>
    </Container>
  );
}

export default App;

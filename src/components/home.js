import React, { Component } from "react";
import { Container, Dropdown, Form, Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Button from "./component/button";
//import Menu from "./component/menu";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Scott's Stock Screener</h1>

          <h3>
            This app is for saving Scott's stock predicitons, click menu to see
          </h3>
        </Jumbotron>

        {/* <Jumbotron>
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
        </Jumbotron> */}
      </Container>
    );
  }
}

export default Home;

/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;  */

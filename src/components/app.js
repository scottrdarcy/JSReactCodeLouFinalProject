import React, { Root, Component } from "react";
import { Container, Dropdown, Form, Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Home from "./home";
//import Button from "./component/button";
//import Menu from "./component/menu";

class App extends Component {
  render() {
    return (
      <Root>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="home.js">Home</Dropdown.Item>
            <Dropdown.Item href="journal.js">Journal</Dropdown.Item>
            <Dropdown.Item href="api.js">API</Dropdown.Item>
            <Dropdown.Item href="tables.js">Tables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Root>
    );
  }
}

export default App;

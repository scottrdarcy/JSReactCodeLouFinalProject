import logo from "./logo.svg";
import React, { Root, Component } from "react";
import { Container, Dropdown, Form, Jumbotron } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

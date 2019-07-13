//import { } from "react-bootstrap";

//const Journal = () => (

//   );

//export default Journal;

import React, { Component } from "react";
import { Container, Dropdown, Form, Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Button from "./component/button";
//import Menu from "./component/menu";

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Scott's Stock Screener</h1>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="App.js">Home</Dropdown.Item>
              <Dropdown.Item href="journal.js">Journal</Dropdown.Item>
              <Dropdown.Item href="api.js">API</Dropdown.Item>
              <Dropdown.Item href="table.js">Tables</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Jumbotron>

        <Jumbotron>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;

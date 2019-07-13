import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Dropdown, Form, Jumbotron, Button } from "react-bootstrap";
import App from "./App";
import PredictionsPage from "./components/predictionsPage";

function Index() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Jumbotron>
          <h1>Scott's Stock Screener</h1>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="journal">Journal</Dropdown.Item>
              <Dropdown.Item href="api">API</Dropdown.Item>
              <Dropdown.Item href="predictions">Predicitions</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Jumbotron>
      </div>

      <Route exact path="/" component={App} />
      <Route path="/journal" component={About} />
      <Route path="/predictions" component={PredictionsPage} />
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default AppRouter;

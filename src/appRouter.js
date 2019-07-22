import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dropdown, Card, Jumbotron } from "react-bootstrap";
import App from "./App";
import PredictionsPage from "./components/predictionsPage";
import JournalPage from "./components/journalpage";
import MarketHours from "./components/MarketHours";

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
      <Route path="/journal" component={JournalPage} />
      <Route path="/predictions" component={PredictionsPage} />
      <Route path="/api" component={MarketHours} />
    </Router>
  );
}

function About() {
  return <h1>Could not get journal to work</h1>;
}
export default AppRouter;

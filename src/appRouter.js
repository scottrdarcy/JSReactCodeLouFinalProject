import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dropdown, Jumbotron } from "react-bootstrap";
import App from "./App";
import PredictionsPage from "./components/predictionsPage";
import JournalPage from "./components/journalpage";
import MarketHours from "./components/MarketHours";

/*This is the main page where everything gets rendered, react router is used to link the pages*/

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
export default AppRouter;

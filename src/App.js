import React, {Component } from "react";
import { Container, Form, Jumbotron, Col, Row } from "react-bootstrap";
//import { }
import "./App.css";
import MyJsonService from "./services/MyJsonService";
import uuidv4 from "uuid/v4";

const buttonhome = {
  margin: "2px"
};

function App() {
  return (
    <div class="grid-container">
      <Container>
        <Jumbotron>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>Stock Symbol:</h4>
              </Form.Label>
              <Form.Control type="email" placeholder="AMZN" />
            </Form.Group>
            {/* PLan to change these to radio buttons and add more patterns*/}
            {/*plan to also add a link here so that I can quickly look at chart pattern*/}
            <h4>Stock Trend:</h4>

            {/*<div class="row">
            <div class="col-md-3"*/}

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Basing
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Bottom
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 1 +
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 2 +
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 3 +
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 4 +
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Solid
              Company Down
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Great
              Dividend
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Great
              Company Down Market
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Cup &
              Handle
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Pennant
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Double
              Top
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Triple
              Top
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Cup
              and Handle
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Ascending Triangle
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Descending Triangle
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Rounding Bottom
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Falling Wedge
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Head
              Shoulder's Top
              <span />
            </label>

            {/*}
            </div>*/}

            {/* PLan to change these to radio buttons and add more patterns*/}
            {/*plan to also add a link here so that I can quickly look at news*/}
            <h4>Industry and Stock News:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Hot
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Warm
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Cold
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Shit
              <span />
            </label>

            <h4>Action:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Buy
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Sell
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Short
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 30
              Days
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 60
              Days
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 90
              Days
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> 120
              Days
              <span />
            </label>

            <h4>Type:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Established
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> IPO
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> New &
              Hot
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Penny
              Stock
              <span />
            </label>

            <h4>Fundamentals:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Sales
              Growth
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Profit
              Growth
              <span />
            </label>

            <h4>Financial Ratios:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Sales
              Margin
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Profit
              Margin
              <span />
            </label>

            <h4>Market Share:</h4>
            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Leader
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" />{" "}
              Gaining
              <span />
            </label>

            <label class=".styleforradio">
              <input type="radio" style={buttonhome} checked="checked" /> Losing
              <span />
            </label>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h4>Explain Reasoning of Selection:</h4>
              </Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
          </Form>

          <Row>
            <Col>
              <button
                class="submitbutton"

                // onClick=function() {
                //   console.log("saving predictions");
                //   MyJsonService.savePredictions([
                //     {
                //       id: uuidv4(),
                //       symbol: "T",
                //       days: 12,
                //       action: "Buy",
                //       entry: "My entry example text",
                //       created: "Today",
                //       updated: "Yesterday"
                //     },
                //     {
                //       id: uuidv4(),
                //       symbol: "VGT",
                //       days: 12,
                //       action: "Buy",
                //       entry: "My entry example text2",
                //       created: "Today",
                //       updated: "Yesterday"
                //     }
                //   ]);
                // *}
              >
                Submit
              </button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;

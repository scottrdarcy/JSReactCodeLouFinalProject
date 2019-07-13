import React, { PureComponent, Date } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
  Jumbotron
} from "react-bootstrap";
import PredictionView from "./predictionView";
import MyJsonService from "../services/MyJsonService";

// var Prediction = React.createClass({
//   symbol,
//   days = 1
// });

class PredictionsPage extends React.Component {
  constructor() {
    super();
    this.state = { predictions: [] };
  }
  async componentDidMount() {
    //TODO: load predictions from myJson;
    //const predictions = await myJsonService.GetPredictions();

    const jsonService = new MyJsonService();
    const predictions = await jsonService.getPredictions();
    this.setState(oldState => (oldState.predictions = predictions));

    // const predictions = this.state.predictions.map(prediction => {
    //   return PredictionView(prediction);
    // });
  }

  render() {
    const rows = this.state.predictions.map(
      prediction => new PredictionView(prediction)
    );
    return <Container>{rows}</Container>;
  }
  //has flex grid/table
  //eventually will use foreach on list in state that has all the predictions. this adds a <PredictionView> foreach prediction in this.state.predictions
}

export default PredictionsPage;

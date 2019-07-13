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
import PredictionEdit from "./predictionEdit";
import MyJsonService from "../services/MyJsonService";

// var Prediction = React.createClass({
//   symbol,
//   days = 1
// });

class PredictionsPage extends React.Component {
  constructor() {
    super();
    this.state = { predictions: [] };

    this.editMode = id => {
      this.setState(oldState => {
        const newState = oldState;
        const prediction = newState.predictions.filter(p => p.id == id)[0];
        prediction.isEditMode = true;
        return newState;
      });
    };

    this.viewMode = id =>
      //TODO: add updatePrediction to Service
      this.setState(oldState => {
        const newState = oldState;
        const prediction = newState.predictions.filter(p => p.id == id)[0];
        prediction.isEditMode = false;
        return newState;
      });
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

  // updatePrediction(newPrediction) {
  //   this.setState(oldState => {
  //     //newState.predictions.
  //     var predictions = oldState.predictions;
  //     newState = { predictions };
  //     newState.predictions.filter(p => p.id == predicton.id)[0] = newPrediction;
  //     //prediction = newPredicton;
  //     return newState;
  //   });
  //   //TODO call update api
  // }

  render() {
    const rows = this.state.predictions.map(prediction => {
      if (prediction.isEditMode)
        return new PredictionEdit(
          prediction,
          this.viewMode,
          this.updatePrediction
        );
      else return new PredictionView(prediction, this.editMode);
    });
    return <Container>{rows}</Container>;
  }
  //has flex grid/table
  //eventually will use foreach on list in state that has all the predictions. this adds a <PredictionView> foreach prediction in this.state.predictions
}

export default PredictionsPage;
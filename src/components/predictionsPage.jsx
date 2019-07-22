import React, { PureComponent } from "react";
import { Container, Button } from "react-bootstrap";
import PredictionView from "./predictionView";
import PredictionEdit from "./predictionEdit";
import MyJsonService from "../services/MyJsonService";
import Uuid from "uuid/v4";

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

    this.remove = id => {
      this.setState(oldState => {
        const newState = oldState;
        newState.predictions = newState.predictions.filter(p => p.id != id);

        MyJsonService.savePredictions(newState.predictions);

        return newState;
      });
    };

    this.add = () => {
      this.setState(oldState => {
        const newState = oldState;
        newState.predictions.push({
          isEditMode: true,
          created: new Date().toTimeString(),
          id: new Uuid()
        });
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

    this.updatePrediction = editPrediction => {
      this.setState(oldState => {
        const newState = oldState;
        newState.predictions.forEach(element => {
          if (element.id == editPrediction.id) {
            element = editPrediction;
            element.isEditMode = false;
            element.updated = new Date().toTimeString();
          }
        });
        return newState;
      });

      MyJsonService.savePredictions(this.state.predictions);

      ////TODO call update api
    };
  }

  async componentDidMount() {
    //TODO: load predictions from myJson;
    //const predictions = await myJsonService.GetPredictions();

    const predictions = await MyJsonService.getPredictions();
    console.log(predictions);
    this.setState(oldState => (oldState.predictions = predictions));

    // const predictions = this.state.predictions.map(prediction => {
    //   return PredictionView(prediction);
    // });
  }

  render() {
    const rows = this.state.predictions.map(prediction => {
      if (prediction.isEditMode)
        return new PredictionEdit(
          prediction,
          this.viewMode,
          this.updatePrediction
        );
      else return new PredictionView(prediction, this.editMode, this.remove);
    });

    return (
      <div>
        <Button onClick={this.add}>Add prediction</Button>
        <Container>{rows}</Container>
      </div>
    );
  }
  //has flex grid/table
  //eventually will use foreach on list in state that has all the predictions. this adds a <PredictionView> foreach prediction in this.state.predictions
}

export default PredictionsPage;

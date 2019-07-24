import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import JournalView from "./journalView";
import JournalEdit from "./journalEdit";
import MyJsonService from "../services/MyJsonService";
import Uuid from "uuid/v4";

// var Prediction = React.createClass({
//   symbol,
//   days = 1
// });

class JournalPage extends React.Component {
  constructor() {
    super();
    this.state = { journal: [] };

    this.updateMode = id => {
      this.setState(oldState => {
        const newState = oldState;
        const journal = newState.journal.filter(p => p.id == id)[0];
        journal.isEditMode = true;
        return newState;
      });
    };

    this.remove = id => {
      this.setState(oldState => {
        const newState = oldState;
        newState.journal = newState.journal.filter(p => p.id != id);

        MyJsonService.saveJournals(newState.journal);

        return newState;
      });
    };

    this.entryViewMode = id =>
      //TODO: add updatePrediction to Service
      this.setState(oldState => {
        const newState = oldState;
        const journal = newState.journal.filter(p => p.id == id)[0];
        journal.isEditMode = false;
        return newState;
      });

    this.update = editJournal => {
      this.setState(oldState => {
        const newState = oldState;
        newState.journal.forEach(element => {
          if (element.id == editJournal.id) {
            element = editJournal;
            element.isEditMode = false;
            element.updated = new Date().toTimeString();
          }
        });
        return newState;
      });

      MyJsonService.saveJournals(this.state.journal);

      ////TODO call update api
    };

    this.add = () => {
      this.setState(oldState => {
        const newState = oldState;
        newState.journal.push({
          isEditMode: true,
          created: new Date().toTimeString(),
          updated: new Date().toTimeString(),
          id: new Uuid()
        });
        return newState;
      });
    };
  }

  async componentDidMount() {
    //TODO: load predictions from myJson;
    //const predictions = await myJsonService.GetPredictions();

    const journal = await MyJsonService.getJournals();
    console.log(journal);
    this.setState(oldState => (oldState.journal = journal));

    // const predictions = this.state.predictions.map(prediction => {
    //   return PredictionView(prediction);
    // });
  }

  render() {
    const rows = this.state.journal.map(journal => {
      if (journal.isEditMode)
        return new JournalEdit(journal, this.updateMode, this.update);
      else return new JournalView(journal, this.updateMode, this.remove);
    });

    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <h1> Web Development Journal:</h1>
            </Col>
            <Col xs="6">
              <Button onClick={this.add}> Make Entry:</Button>
            </Col>
          </Row>
        </Container>
        <Container>{rows}</Container>
      </div>
    );
  }
  //has flex grid/table
  //eventually will use foreach on list in state that has all the predictions. this adds a <PredictionView> foreach prediction in this.state.predictions
}

export default JournalPage;

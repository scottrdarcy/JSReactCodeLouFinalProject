import React, { Component } from "react";

//Financial Modeling Prep API found in link provided

class MarketHours extends Component {
  constructor() {
    super();
    this.state = {
      hours: "Loading..."
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://financialmodelingprep.com/api/is-the-market-open?datatype=json"
    );

    const json = await response.json();

    console.log(json);

    var hourstext;
    if (json.isthemarketopen) {
      hourstext = "The Market is currently Closed";
    } else {
      hourstext = "The Market is currently Open. Trade with Caution!";
    }

    this.setState({ hours: hourstext });
  }

  render() {
    return <div id="marketstyle">{this.state.hours}</div>;
  }
}

export default MarketHours;

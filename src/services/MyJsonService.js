import React from "react";
import Uuid from "uuid";

class MyJsonService {
  static async getJournals() {
    var response = await fetch("https://api.myjson.com/bins/z3rml", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    return await response.json();
  }

  static async saveJournals(journals) {
    // if (!predictions) {
    //   predictions = [];
    // }
    //console.log(predictions);
    //const mydata = JSON.stringify({ key: 1, value: predictions });
    var response = await fetch("https://api.myjson.com/bins/z3rml", {
      method: "PUT",
      body: JSON.stringify(journals),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    return response;
  }

  static async getPredictions() {
    var response = await fetch("https://api.myjson.com/bins/jqqod", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    return await response.json();
  }

  static async savePredictions(predictions) {
    // if (!predictions) {
    //   predictions = [];
    // }
    //console.log(predictions);
    //const mydata = JSON.stringify({ key: 1, value: predictions });
    var response = await fetch("https://api.myjson.com/bins/jqqod", {
      method: "PUT",
      body: JSON.stringify(predictions),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    return response;
  }
  //https://api.myjson.com/bins/z3rml
}

export default MyJsonService;

// [
//   {
//     "id": "eb96c3e9-fe3c-4cf9-9e06-2c393c64da90",
//     "symbol": "T",
//     "days": 12,
//     "action": "Buy",
//     "entry": "My entry example text",
//     "created": "Today",
//     "updated": "Yesterday"
//   },
//   {
//     "id": "3d6c89d5-f80c-44cb-a229-b9a35cc582fb",
//     "symbol": "VGT",
//     "days": 12,
//     "action": "Buy",
//     "entry": "My entry example text2",
//     "created": "Today",
//     "updated": "Yesterday"
//   }
// ]

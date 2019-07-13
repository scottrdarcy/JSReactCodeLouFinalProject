import React from "react";
import Uuid from "uuid";

class MyJsonService {
  async getPredictions() {
    //todo: implement MyJsonApi
    return [
      {
        id: new Uuid(),
        symbol: "T",
        days: 12,
        action: "Buy",
        entry: "My entry example text",
        created: "Today",
        updated: "Yesterday"
      },
      {
        id: "123456-1234-1234-1234-123456789012",
        symbol: "T",
        days: 12,
        action: "Buy",
        entry: "My entry example text",
        created: "Today",
        updated: "Yesterday"
      }
    ];
  }
}

export default MyJsonService;

import React from "react";
import { Button } from "react-bootstrap";

function PredictionEdit(prediction, viewMode, updatePrediction) {
  const goToViewMode = () => {
    //    updatePrediction(prediction);
    viewMode(prediction.id);
  };

  return (
    <div>
      <textarea>{prediction.entry}</textarea>
      <Button onClick={goToViewMode}>Save</Button>
    </div>
  );
}

export default PredictionEdit;

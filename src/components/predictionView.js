import React from "react";
import { Button } from "react-bootstrap";

function PredictionView(prediction, editMode) {
  const goToEditMode = () => {
    editMode(prediction.id);
  };
  return (
    <div>
      {prediction.entry}
      <Button onClick={goToEditMode}>edit</Button>
    </div>
  );
}

export default PredictionView;

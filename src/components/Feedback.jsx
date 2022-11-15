import React from "react";
import Card from "./shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Feedback({ feedback, handleDelete }) {
  return (
    <>
      <Card>
        <div className="block-feedbackNumber">{feedback.rating}</div>
        {feedback.text} <span onClick={() => handleDelete(feedback.id)}>X</span>
      </Card>
    </>
  );
}

export default Feedback;

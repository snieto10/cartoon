import React from "react";
import Card from "./shared/Card";
import { useContext, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Feedback({ feedback }) {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <>
      <Card>
        <div className="block-feedbackNumber">{feedback.rating}</div>
        {feedback.text} <span onClick={() => editFeedback(feedback)}>O</span>
        <span onClick={() => handleDelete(feedback.id)}>X</span>
      </Card>
    </>
  );
}

export default Feedback;

import React from "react";
import { useContext } from "react";
import Feedback from "./Feedback";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, handleDelete } = useContext(FeedbackContext);

  return (
    <div>
      {feedback.map((f) => (
        <Feedback key={f.id} feedback={f} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;

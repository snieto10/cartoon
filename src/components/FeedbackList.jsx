import React from "react";
import { useContext } from "react";
import Feedback from "./Feedback";
import FeedbackContext from "../context/FeedbackContext";
import spinner from "../assets/spinner.gif";

function FeedbackList() {
  const { feedback, handleDelete, isLoading } = useContext(FeedbackContext);

  if (isLoading)
    return (
      <>
        <img src={spinner} alt="Loading..." />
      </>
    );

  return (
    <div>
      {feedback.map((f) => (
        <Feedback key={f.id} feedback={f} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;

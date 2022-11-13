import React from "react";

function Feedback({ feedback, handleDelete }) {
  return (
    <>
      <div className="block-feedback">
        <div className="block-feedbackNumber">{feedback.rating}</div>
        {feedback.text} <span onClick={() => handleDelete(feedback)}>X</span>
      </div>
    </>
  );
}

export default Feedback;

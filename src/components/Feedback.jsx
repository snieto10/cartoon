import React from "react";

function Feedback({ feedback }) {
  return (
    <>
      <div className="block-feedback">
        <div className="block-feedbackNumber">{feedback.rating}</div>
        {feedback.text}
      </div>
    </>
  );
}

export default Feedback;

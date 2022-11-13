import React from "react";
import RatingBar from "./RatingBar";
import { useState } from "react";

function SubmitForm({ newFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);

    const obj = {
      text,
      rating,
      id: Math.random() * 1000,
    };

    newFeedback(obj);
  };

  const handleRating = (e) => {
    setRating(+e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="block-main">
          <RatingBar handleRating={handleRating} />
          <div className="box-input">
            <input
              onChange={handleTextChange}
              type="text"
              className="input"
              placeholder="Write a review"
              value={text}
            />
            <button type="submit" className="btn">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SubmitForm;

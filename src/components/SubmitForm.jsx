import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingBar from "./RatingBar";
import Button from "./shared/Button";
import { useState, useEffect } from "react";

function SubmitForm({ newFeedback }) {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") setBtnDisabled(true);
    if (text.length <= 5) setMessage("Feed must have at least 6 characters");
    if (text.length > 6) {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);

    const obj = {
      text,
      rating,
    };

    let obj2 = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, obj2);
    } else {
      addFeedback(obj);
    }
    setText("");
  };

  const handleRating = (e) => {
    setRating(+e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="block-main">
          <RatingBar handleRating={handleRating} rating={rating} />
          <div className="box-input">
            <input
              onChange={handleTextChange}
              type="text"
              className="input"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              SEND
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </>
  );
}

export default SubmitForm;

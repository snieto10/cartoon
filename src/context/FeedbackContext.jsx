import React from "react";
import feedbackData from "../data/feedback";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //Delete Feedback
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  // Add feedback
  const addFeedback = (newF) => {
    setFeedback([newF, ...feedback]);
  };
  //Set Item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id == id
          ? { id, text: updItem.text, rating: updItem.rating }
          : item
      )
    );
    setFeedbackEdit({ edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

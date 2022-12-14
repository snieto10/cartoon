import React from "react";
import feedbackData from "../data/feedback";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Delete Feedback
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });

    setFeedback(feedback.filter((item) => item.id !== id));
  };
  // Add feedback
  const addFeedback = async (newF) => {
    const response = await fetch(`http://localhost:5000/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newF),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
    console.log(feedback);
  };
  //Set Item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) =>
        item.id == id
          ? { id: data.id, text: data.text, rating: data.rating }
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

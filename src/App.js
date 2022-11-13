import logo from "./logo.svg";
import "./App.css";
import SubmitForm from "./components/SubmitForm";
import Feedback from "./components/Feedback";
import feedbackData from "./data/feedback";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newF) => {
    setFeedback([newF, ...feedback]);
  };

  const handleDelete = (item) => {
    console.log(feedback);
  };
  return (
    <>
      <SubmitForm newFeedback={addFeedback} />

      {feedback.map((f) => (
        <Feedback key={f.id} feedback={f} handleDelete={handleDelete} />
      ))}
    </>
  );
}

export default App;

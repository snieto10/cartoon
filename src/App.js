import logo from "./logo.svg";
import "./App.css";
import SubmitForm from "./components/SubmitForm";
import Feedback from "./components/Feedback";
import feedbackData from "./data/feedback";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
      <SubmitForm />

      {feedback.map((f) => (
        <Feedback key={f.id} feedback={f} />
      ))}
    </>
  );
}

export default App;

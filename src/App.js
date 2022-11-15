import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SubmitForm from "./components/SubmitForm";
import Feedback from "./components/Feedback";
import feedbackData from "./data/feedback";
import Header from "./components/Header";
import { useState } from "react";
import Help from "./pages/Help";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newF) => {
    setFeedback([newF, ...feedback]);
  };

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SubmitForm newFeedback={addFeedback} />

                {feedback.map((f) => (
                  <Feedback
                    key={f.id}
                    feedback={f}
                    handleDelete={handleDelete}
                  />
                ))}
              </>
            }
          ></Route>
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

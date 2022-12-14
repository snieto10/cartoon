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
import { FeedbackProvider } from "./context/FeedbackContext";
import { SergioProvider } from "./context/SergioContext";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <FeedbackProvider>
        <SergioProvider>
          <Router>
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <SubmitForm />

                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path="/learn" element={<Learn />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Router>
        </SergioProvider>
      </FeedbackProvider>
    </>
  );
}

export default App;

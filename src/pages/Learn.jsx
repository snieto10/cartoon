import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import SergioContext from "../context/SergioContext";

function Learn() {
  const { feedback } = useContext(FeedbackContext);
  const { serInfo } = useContext(SergioContext);
  return (
    <>
      <h1>{feedback[0].text}</h1>
      <h1>{serInfo.sergio.age}</h1>
    </>
  );
}

export default Learn;

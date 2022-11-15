import React from "react";

function Card({ children }) {
  return (
    <>
      <div className="block-feedback">{children}</div>
    </>
  );
}

export default Card;

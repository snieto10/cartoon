import React from "react";
import { PropTypes } from "prop-types";

function Button({ children, type, isDisabled }) {
  return (
    <>
      <button type={type} disabled={isDisabled} className={"btn"}>
        {children}
      </button>
    </>
  );
}

export default Button;

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

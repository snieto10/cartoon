import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <ul className="box-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/practice">Practice</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;

import React from "react";

import "./button.css";

const Button = ({ buttonFunction, handleButtonPress }) => (
  <button
    className="button"
    onClick={handleButtonPress}
    name="button"
    value={buttonFunction}
  >
    {buttonFunction}
  </button>
);

export default Button;

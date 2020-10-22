import React from "react";

import "./display.css";

const Calculator = ({ currentVal }) => (
  <>
    <section className="display" data-testid="display">
      {currentVal === "" ? "0" : currentVal}
    </section>
  </>
);

export default Calculator;

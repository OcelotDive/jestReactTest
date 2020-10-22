import React, { useState } from "react";
import Display from "../display/Display";
import ButtonContainer from "../buttonContainer/ButtonContainer";

import "./calculator.css";

const Calculator = () => {
  const buttonFunctions = [
    "CE",
    "C",
    "sqt",
    "/",
    "B",
    "7",
    "8",
    "9",
    "*",
    "misc1",
    "4",
    "5",
    "6",
    "-",
    "misc2",
    "1",
    "2",
    "3",
    "+",
    "misc3",
    "+/-",
    "0",
    ".",
    "=",
    "misc4",
  ];

  /*const assessInput = (input) => {
    switch(input) {
      case (/[0-9]/):
        inputIsDigit(input);
        break;
      case (/\+ |\- |\* |\/ |\./):
        inputIsOperator(input);

    }
  } */

  const [currentValue, setCurrentValue] = useState("");
  const [subTotal, setSubtoal] = useState(0);
  const [currentString, setCurrentString] = useState("");

  const handleButtonPress = (e) => {
    if (currentValue.length === 14) return; // do this for now
    const pressedValue = e.target.value;
    switch (pressedValue) {
      case /[0-9]/:
        setCurrentValue(currentValue + pressedValue);
        break;
    }
    setCurrentValue(currentValue + pressedValue);
  };

  return (
    <>
      <section className="calculatorOuter" data-testid="calculatorOuter">
        <Display currentVal={currentValue} />
        <ButtonContainer
          buttonFunctions={buttonFunctions}
          handleButtonPress={handleButtonPress}
        />
      </section>
    </>
  );
};

export default Calculator;

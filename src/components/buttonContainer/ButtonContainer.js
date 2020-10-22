import React from "react";
import Button from "../button/Button";

import "./buttonContainer.css";

const ButtonContainer = ({ buttonFunctions, handleButtonPress }) => (
  <>
    <section className="buttonContainer" data-testid="buttonContainer">
      {buttonFunctions.map((buttonFunction) => (
        <Button
          buttonFunction={buttonFunction}
          handleButtonPress={handleButtonPress}
          key={buttonFunction}
        />
      ))}
    </section>
  </>
);

export default ButtonContainer;

import React, { Component } from "react";
import MainContainer from "./components/mainContainer/MainContainer";
import Calculator from "./components/calculator/Calculator";

import "./App.css";

const App = () => (
  <>
    <MainContainer>
      <Calculator />
    </MainContainer>
  </>
);

export default App;

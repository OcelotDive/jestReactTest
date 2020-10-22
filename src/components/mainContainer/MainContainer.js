import React from "react";

import "./mainContainer.css";

const MainContainer = (props) => (
  <>
    <main className="mainContainer" data-testid="mainContainer">
      {props.children}
    </main>
  </>
);

export default MainContainer;

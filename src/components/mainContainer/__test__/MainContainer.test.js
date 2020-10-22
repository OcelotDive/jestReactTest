import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "../MainContainer";

import { render } from "@testing-library/react";

it("renders correctly without crashing", () => {
  const { getByTestId } = render(<MainContainer />);
  const mainContainer = getByTestId("mainContainer");
  expect(mainContainer).toBeInTheDocument();
});

import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../../calculator/Calculator";

import { render } from "@testing-library/react";

it("renders correctly without crashing", () => {
  const { getByTestId } = render(<Calculator />);
  const buttonContainer = getByTestId("buttonContainer");
  expect(buttonContainer).toBeInTheDocument();
});

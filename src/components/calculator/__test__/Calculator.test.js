import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../Calculator";

import { render } from "@testing-library/react";

it("renders correctly without crashing", () => {
  const { getByTestId } = render(<Calculator />);
  const calculator = getByTestId("calculatorOuter");
  expect(calculator).toBeInTheDocument();
});

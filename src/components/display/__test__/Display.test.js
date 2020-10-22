import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../Display";

import { render } from "@testing-library/react";

it("renders correctly without crashing", () => {
  const { getByTestId } = render(<Calculator />);
  const display = getByTestId("display");
  expect(display).toBeInTheDocument();
});

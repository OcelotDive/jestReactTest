import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../../calculator/Calculator";

import { render } from "@testing-library/react";

it("renders correctly without crashing", () => {
  const { getByText } = render(<Calculator />);
  const button = getByText("1");
  expect(button).toBeInTheDocument();
});

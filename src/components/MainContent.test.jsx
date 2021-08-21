import React from "react";
import { render, cleanup } from "@testing-library/react";
import MainContent from "./MainContent";

afterEach(cleanup);

it("should equal to 0", () => {
  const { getByTestId } = render(<MainContent />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});

it("should be enabled", () => {
  const { getByTestId } = render(<MainContent />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
  const { getByTestId } = render(<MainContent />);
  expect(getByTestId("button-down")).toBeDisabled();
});

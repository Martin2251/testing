import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import MainContent from "./MainContent";

afterEach(cleanup);

it("should equal to 0", () => {
  const { getByTestId } = render(<MainContent />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});

it("should be enabled", () => {
  const { getByTestId } = render(<MainContent />);
  expect(getByTestId("button-up", "button-down")).not.toHaveAttribute(
    "disabled"
  );
});

it("increments counter", () => {
  const { getByTestId } = render(<MainContent />);

  fireEvent.click(getByTestId("button-up"));

  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrements counter", () => {
  const { getByTestId } = render(<MainContent />);

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("-1");
});

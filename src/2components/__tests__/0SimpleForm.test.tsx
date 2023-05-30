import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SimpleForm from "../0SimpleForm";

test("renders children", () => {
  const testMessage = "Test Message";
  render(<SimpleForm>{testMessage}</SimpleForm>);
});

test("runs button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<button onClick={handleClick} />);
  fireEvent.click(screen.getByText("제출"));
  expect(handleClick).toBeCalledTimes(1);
});

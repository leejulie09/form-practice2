import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "../1TextField";

test("renders screen", () => {
  render(<TextField source="" label="" />);
});

test("renders textfield", () => {
  const { getByText, getByPlaceholderText } = render(
    <TextField source="" label="" />
  );
  const input = getByPlaceholderText("이름" || "비밀번호");
  fireEvent.change(input, { target: { value: "" } });
  expect(input.getAttribute("value")).toBe("");
});

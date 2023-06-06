import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextField from "../src/2components/1TextField";
import { max, min } from "../src/5validations";

//TextField validate 를 넘겨주고 에러메시지가 제대로 출력되는지 테스트
describe("Text Field", () => {
  it("renders screen", () => {
    render(<TextField source="" label="" />);
  });

  it("shows error when prop validates is passed", () => {
    const { queryAllByRole, getByTestId } = render(
      <TextField source="" label="" validates={[min(1), max(3)]} />
    );
    //error를 만들기

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "aa" } });

    const paragraphElements = queryAllByRole("paragraph");
    screen.debug();

    expect(paragraphElements.length).toBeGreaterThan(0);
  });
});

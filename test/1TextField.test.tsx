import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "../src/2components/1TextField";

//TextField validate 를 넘겨주고 에러메시지가 제대로 출력되는지 테스트
describe("Text Field", () => {
  it("renders screen", () => {
    render(<TextField source="" label="" />);
  });

  it("shows error when prop validates is passed", () => {
    const { queryAllByRole } = render(
      <TextField source="" label="" validates={[]} />
    );
    const paragraphElements = queryAllByRole("paragraph");
    expect(paragraphElements.length).toBeLessThan(1);
  });
});

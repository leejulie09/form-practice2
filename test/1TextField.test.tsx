import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextField from "../src/2components/1TextField";
import { max, min } from "../src/5validations";
import SimpleForm from "../src/2components/0SimpleForm";

//TextField validate 를 넘겨주고 에러메시지가 제대로 출력되는지 테스트
describe("Text Field", () => {
  it("renders screen", () => {
    render(<TextField source="" label="" />);
  });

  it("shows error when prop validates is passed", () => {
    const { queryAllByRole, getByTestId, getByRole } = render(
      <SimpleForm>
        <TextField
          source={"name"}
          label={"이름"}
          validates={[min(5), max(10)]}
        />
      </SimpleForm>
    );

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "aa" } });

    const paragraphElement = screen.queryByRole("paragraph");
    expect(paragraphElement).toBeDefined();
  });
});

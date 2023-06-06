import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SimpleForm from "../src/2components/0SimpleForm";

//SimpleForm 에 에러가 있을 때 제출 버튼이 제대로 클릭되지 않는 것을 테스트
//SimpleForm 에 에러가 없고 제출 버튼을 클릭했을 때 입력한 값들이 출력되는지 테스트
describe("Simple Form test", () => {
  it("renders children", () => {
    const testMessage = "Test Message";
    render(<SimpleForm>{testMessage}</SimpleForm>);
  });

  it("enables submit button without error", () => {
    window.alert = jest.fn();
    const testMessage = "Test Message";
    render(<SimpleForm>{testMessage}</SimpleForm>);
    const button = screen.getByText("제출");
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalled();
  });

  it("disables submit button with error", () => {
    window.alert = jest.fn();

    const testMessage = "Test Message";
    render(<SimpleForm>{testMessage}</SimpleForm>);
    const button = screen.getByText("제출");
    fireEvent.click(button);
    expect(window.alert).not.toHaveBeenCalled();
  });
});

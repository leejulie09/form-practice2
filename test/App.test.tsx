/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import SimpleForm from "../src/2components/0SimpleForm";
import TextField from "../src/2components/1TextField";

describe("", () => {
  it("should render TextField", () => {
    const input = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} />
      </SimpleForm>
    );

    //expect().toBeInDocument()
  });
});

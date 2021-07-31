import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
  test("renders App", () => {
    const { container } = render(<App />);
    const div = container.querySelector("div");
    expect(div).toHaveClass("App");
  });
});

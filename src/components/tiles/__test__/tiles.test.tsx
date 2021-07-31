import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { Tiles } from "..";
import { store } from "../../../store";

describe("<Tiles />", () => {
  test("renders Tiles", () => {
    const { container } = render(
      <Provider store={store}>
        <Tiles />
      </Provider>
    );

    const element = container.querySelector(".tiles-main-container");
    expect(element).toBeInTheDocument();
  });
});

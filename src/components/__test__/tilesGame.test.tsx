import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { TilesGame } from "../";
import { store } from "../../store";

describe("<TilesGame />", () => {
  test("renders TilesGame", () => {
    const { container } = render(
      <Provider store={store}>
        <TilesGame />
      </Provider>
    );
    expect(container).toBeTruthy();
    const element = container.querySelector(".left-item-container");
    expect(element).toBeInTheDocument();
  });
});

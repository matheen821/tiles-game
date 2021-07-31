import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { store } from "../../../store";

describe("<Header />", () => {
  test("renders Header", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    screen.getByText("Ever Real Challenge!!");
    screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "h2" &&
        content.startsWith("Ever Real")
      );
    });
  });
});

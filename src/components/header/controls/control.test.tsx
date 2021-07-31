import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { Control } from "./control";
import { ControlNameEnum } from "../../../utils";

describe("Testing Control Component", () => {
  test("Control button", () => {
    const { container } = render(
      <Control
        title="Rows"
        count={6}
        controlType={ControlNameEnum.Rows}
        handleControlAction={() => {}}
      />
    );

    expect(container.querySelector(".control-title")?.textContent).toEqual(
      "Rows"
    );
    expect(container.querySelector(".control-count")?.textContent).toEqual("6");
  });

  test("Increment control button click", () => {
    const handleControlAction = jest.fn((count, controlType) => {
      expect(count).toEqual(1);
      expect(controlType).toEqual(ControlNameEnum.Rows);
    });

    render(
      <Control
        title="Rows"
        count={4}
        controlType={ControlNameEnum.Rows}
        handleControlAction={handleControlAction}
      />
    );
    const incrementButton = screen.getByTestId("control-increment");
    UserEvent.click(incrementButton);
  });

  test("Decrement control button click", () => {
    const handleControlAction = jest.fn((count, controlType) => {
      expect(count).toEqual(-1);
      expect(controlType).toEqual(ControlNameEnum.Colors);
    });

    render(
      <Control
        title="Colors"
        count={5}
        controlType={ControlNameEnum.Colors}
        handleControlAction={handleControlAction}
      />
    );
    const decrementButton = screen.getByTestId("control-decrement");
    UserEvent.click(decrementButton);
  });
});

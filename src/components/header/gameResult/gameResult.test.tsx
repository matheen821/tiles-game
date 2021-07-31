import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GameResult } from "./index";
import { ControlNameEnum } from "../../../utils";

describe("Testing GameResult Component", () => {
  test("Congratulations message should render", () => {
    const { queryByTestId } = render(
      <GameResult
        moves={5}
        bestMoves={5}
        totalRecordedMoves={5}
        isGameCompleted={true}
        isViewMovesMode={false}
        handleViewMoves={() => {}}
        handleControlAction={() => {}}
      />
    );

    expect(queryByTestId("success-message")).not.toBeNull();
  });

  test("in View Mode Congratulations message should not render", () => {
    const { queryByTestId } = render(
      <GameResult
        moves={5}
        bestMoves={5}
        totalRecordedMoves={5}
        isGameCompleted={true}
        isViewMovesMode={true}
        handleViewMoves={() => {}}
        handleControlAction={() => {}}
      />
    );

    expect(queryByTestId("success-message")).toBeNull();
  });

  test("View more button and click", () => {
    const { queryByTestId } = render(
      <GameResult
        moves={5}
        bestMoves={5}
        totalRecordedMoves={5}
        isGameCompleted={false}
        isViewMovesMode={false}
        handleViewMoves={() => {}}
        handleControlAction={() => {}}
      />
    );
    const viewOrStopBtn = queryByTestId("view-or-stop-moves-button");
    expect(viewOrStopBtn).not.toBeNull();
    expect(viewOrStopBtn?.textContent).toEqual(" View Moves");
    expect(queryByTestId("view-moves-control")).toBeNull();
  });

  test("Stop button and View Moves control should render", () => {
    const { queryByTestId } = render(
      <GameResult
        moves={5}
        bestMoves={5}
        totalRecordedMoves={5}
        isGameCompleted={false}
        isViewMovesMode={true}
        handleViewMoves={() => {}}
        handleControlAction={() => {}}
      />
    );

    let viewOrStopBtn = queryByTestId("view-or-stop-moves-button");
    expect(viewOrStopBtn).not.toBeNull();
    expect(viewOrStopBtn?.textContent).toEqual(" Stop");
    expect(queryByTestId("view-moves-control")).toBeInTheDocument();
  });
});

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ActionButtons } from "./index";

describe("Testing ActionButtons Component", () => {
  test("Start button click", () => {
    const handleStartGame = jest.fn();

    render(
      <ActionButtons
        isGameStart={false}
        moves={0}
        isGameCompleted={false}
        isViewMovesMode={false}
        handleStartGame={handleStartGame}
        handleResetGame={() => {}}
        handleSolveByComputer={() => {}}
      />
    );

    const startButton = screen.getByText("Start");
    expect(startButton).toBeInTheDocument();
    fireEvent.click(startButton);
    expect(handleStartGame).toHaveBeenCalledTimes(1);
  });

  test("Solve Next button click", () => {
    const handleSolveByComputer = jest.fn((isSolveAllSteps) => {
      expect(isSolveAllSteps).toBeFalsy();
    });

    const { queryByTestId } = render(
      <ActionButtons
        isGameStart={true}
        moves={0}
        isGameCompleted={false}
        isViewMovesMode={false}
        handleStartGame={() => {}}
        handleResetGame={() => {}}
        handleSolveByComputer={handleSolveByComputer}
      />
    );

    const solveButton = queryByTestId("solve-next-button");
    expect(solveButton).toBeInTheDocument();
    expect(solveButton).not.toBeDisabled();
    if (solveButton) fireEvent.click(solveButton);
    expect(handleSolveByComputer).toHaveBeenCalledTimes(1);
  });

  test("Reset button click", () => {
    const handleResetGame = jest.fn();

    render(
      <ActionButtons
        isGameStart={false}
        moves={2}
        isGameCompleted={false}
        isViewMovesMode={false}
        handleStartGame={() => {}}
        handleResetGame={handleResetGame}
        handleSolveByComputer={() => {}}
      />
    );

    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
    expect(handleResetGame).toHaveBeenCalledTimes(1);
  });
});

import React, { FC } from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ReplayIcon from "@material-ui/icons/Replay";
import ComputerIcon from "@material-ui/icons/Computer";
import { ActionsContainer } from "./style";

export const ActionButtons: FC<IActionButtonsProps> = (props) => {
  const {
    isGameStart,
    moves,
    isGameCompleted,
    isViewMovesMode,
    handleStartGame,
    handleResetGame,
    handleSolveByComputer,
  } = props;

  return (
    <ActionsContainer>
      <div>
        <Button
          onClick={handleStartGame}
          variant="outlined"
          color="primary"
          className="start-button"
          size="small"
        >
          <PlayArrowIcon />
          {isGameStart ? "New Game" : "Start"}
        </Button>
        {(moves > 0 || isViewMovesMode) && (
          <Button
            onClick={handleResetGame}
            variant="outlined"
            color="secondary"
            className="reset-button"
            size="small"
          >
            <ReplayIcon fontSize="small" /> Reset
          </Button>
        )}
      </div>
      {isGameStart && (
        <>
          <Button
            onClick={(e) => {
              handleSolveByComputer(false);
            }}
            variant="outlined"
            color="primary"
            className="solve-next-button"
            size="small"
            disabled={isGameCompleted}
            data-testid="solve-next-button"
          >
            <ComputerIcon /> Solve Next
          </Button>
          <Button
            onClick={(e) => {
              handleSolveByComputer(true);
            }}
            variant="outlined"
            color="primary"
            className="solve-all-button"
            size="small"
            disabled={isGameCompleted}
            data-testid="solve-all-button"
          >
            <ComputerIcon /> Solve All
          </Button>
        </>
      )}
    </ActionsContainer>
  );
};

export interface IActionButtonsProps {
  isGameStart: boolean;
  moves: number;
  isGameCompleted: boolean;
  isViewMovesMode: boolean;
  handleStartGame: () => void;
  handleResetGame: () => void;
  handleSolveByComputer: (isSolveAllSteps: boolean) => void;
}

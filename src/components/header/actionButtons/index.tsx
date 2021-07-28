import React, { FC } from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ReplayIcon from "@material-ui/icons/Replay";
import ComputerIcon from "@material-ui/icons/Computer";
import { ActionsContainer } from "./style";

export const ActionButtons: FC<IActionButtonsProps> = (props) => {
  const { isGameStart, handleStartGame, handleSolveByComputer } = props;

  return (
    <ActionsContainer>
      <Button
        onClick={handleStartGame}
        variant="outlined"
        color="primary"
        className="action-button"
        size="small"
      >
        {isGameStart ? (
          <>
            <ReplayIcon fontSize="small" /> Restart
          </>
        ) : (
          <>
            <PlayArrowIcon /> Start
          </>
        )}
      </Button>
      <Button
        onClick={handleSolveByComputer}
        variant="outlined"
        color="primary"
        className="action-button solve-by-computer-button"
        size="small"
        disabled={!isGameStart}
      >
        <ComputerIcon /> Solve by computer
      </Button>
    </ActionsContainer>
  );
};

export interface IActionButtonsProps {
  isGameStart: boolean;
  handleStartGame: () => void;
  handleSolveByComputer: () => void;
}

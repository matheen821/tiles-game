import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlNameEnum, useInterval } from "../../utils";
import { Controls } from "./controls";
import { ActionButtons } from "./actionButtons";
import { GameResult } from "./gameResult";
import {
  tilesGameActions,
  tilesGameStateSelector,
} from "../../store/tilesGame";
import { HeaderContainer } from "./style";

export const Header = () => {
  const {
    colorsCount,
    rows,
    cols,
    isGameStart,
    moves,
    bestMoves,
    isGameCompleted,
    isViewMovesMode,
    recordedMoves,
    isSolveAll,
  } = useSelector(tilesGameStateSelector);

  const dispatch = useDispatch();

  useInterval(
    () => {
      dispatch(tilesGameActions.solveByComputer());
      if (isGameCompleted) {
        dispatch(tilesGameActions.setIsSolveAll());
      }
    },
    !isGameCompleted && isSolveAll ? 1000 : null
  );

  const handleControlAction = (count: number, type: ControlNameEnum) => {
    dispatch(tilesGameActions.setControlActionsData({ count, type }));
  };

  const handleStartGame = () => {
    dispatch(tilesGameActions.startGame());
  };

  const handleResetGame = () => {
    dispatch(tilesGameActions.resetGame());
  };

  const handleSolveByComputer = (isSolveAllSteps: boolean) => {
    if (isSolveAllSteps) {
      dispatch(tilesGameActions.setIsSolveAll());
    }
    dispatch(tilesGameActions.solveByComputer());
  };

  const handleViewMoves = () => {
    dispatch(tilesGameActions.setIsViewMovesMode());
  };

  return (
    <HeaderContainer>
      <h2>Ever Real Challenge!!</h2>
      <Controls
        colorsCount={colorsCount}
        rows={rows}
        cols={cols}
        handleControlAction={handleControlAction}
      />
      <ActionButtons
        isGameStart={isGameStart}
        moves={moves}
        isGameCompleted={isGameCompleted}
        isViewMovesMode={isViewMovesMode}
        handleStartGame={handleStartGame}
        handleResetGame={handleResetGame}
        handleSolveByComputer={handleSolveByComputer}
      />
      <GameResult
        moves={moves}
        bestMoves={bestMoves}
        totalRecordedMoves={recordedMoves.length - 1}
        isGameCompleted={isGameCompleted}
        isViewMovesMode={isViewMovesMode}
        isSolveAll={isSolveAll}
        handleViewMoves={handleViewMoves}
        handleControlAction={handleControlAction}
      />
    </HeaderContainer>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlNameEnum } from "../../utils";
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
  } = useSelector(tilesGameStateSelector);

  const dispatch = useDispatch();

  const handleControlAction = (count: number, type: ControlNameEnum) => {
    dispatch(tilesGameActions.setControlActionsData({ count, type }));
  };

  const handleStartGame = () => {
    dispatch(tilesGameActions.startGame());
  };

  const handleSolveByComputer = () => {
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
        handleStartGame={handleStartGame}
        handleSolveByComputer={handleSolveByComputer}
      />
      <GameResult
        moves={moves}
        bestMoves={bestMoves}
        isGameCompleted={isGameCompleted}
        isViewMovesMode={isViewMovesMode}
        handleViewMoves={handleViewMoves}
        handleControlAction={handleControlAction}
      />
    </HeaderContainer>
  );
};

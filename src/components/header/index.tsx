import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TilesRowsAndColsEnum } from "../../utils";
import { Control } from "./control";
import {
  tilesGameActions,
  tilesGameStateSelector,
} from "../../store/tilesGame";
import { Button } from "@material-ui/core";

export const Header = () => {
  const { rows, cols, isGameStart } = useSelector(tilesGameStateSelector);
  const dispatch = useDispatch();

  const handleRowsAndColsChange = (
    count: number,
    type: TilesRowsAndColsEnum
  ) => {
    dispatch(tilesGameActions.setRowsAndCols({ count, type }));
  };

  const handleStartGame = () => {
    dispatch(tilesGameActions.setSquare());
  };

  return (
    <div className="header">
      <h2>Ever Real Challenge Game!!</h2>
      <Button onClick={handleStartGame} variant="outlined" color="primary">
        {isGameStart ? "Restart" : "Start Game"}
      </Button>
      <Control
        rows={rows}
        cols={cols}
        handleRowsAndColsChange={handleRowsAndColsChange}
      />
    </div>
  );
};

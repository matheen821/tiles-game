import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tilesGameActions,
  tilesGameStateSelector,
} from "../../store/tilesGame";
import { Moves } from "./moves";
import { TilesContainer } from "./style";

export const Tiles = () => {
  const {
    moves,
    bestMoves,
    isGameStart,
    square,
    isGameCompleted,
    isViewMovesMode,
  } = useSelector(tilesGameStateSelector);
  const dispatch = useDispatch();

  const handleSetOrigin = (color: string) => {
    dispatch(tilesGameActions.setOrigin(color));
  };

  return (
    <>
      {isGameStart && (
        <>
          <Moves moves={moves} bestMoves={bestMoves} />
          <TilesContainer>
            <table
              className={`tile ${
                isGameCompleted && !isViewMovesMode ? "disabled" : ""
              }`}
            >
              <tbody>
                {square.map((row) => (
                  <tr key={Math.random()}>
                    {row.map((col) => (
                      <td
                        style={{ backgroundColor: col.color }}
                        className={`${col.origin ? "origin" : ""} ${
                          isGameCompleted ? "disabled" : ""
                        }`}
                        onClick={(e) => {
                          handleSetOrigin(col.color);
                        }}
                        key={Math.random()}
                      >
                        <div></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TilesContainer>
        </>
      )}
    </>
  );
};

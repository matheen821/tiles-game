import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tilesGameActions,
  tilesGameStateSelector,
} from "../../store/tilesGame";
import { TilesContainer } from "./style";

export const Tiles = () => {
  const { isGameStart, square } = useSelector(tilesGameStateSelector);
  const dispatch = useDispatch();

  const handleSetOrigin = (color: string) => {
    dispatch(tilesGameActions.setOrigin(color));
  };

  return (
    <TilesContainer>
      {isGameStart && (
        <table className="tile">
          <tbody>
            {square.map((l) => (
              <tr>
                {l.map((c) => (
                  <td
                    style={{ backgroundColor: c.color }}
                    className={c.origin ? " origin" : ""}
                    onClick={(e) => {
                      handleSetOrigin(c.color);
                    }}
                  >
                    <div></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </TilesContainer>
  );
};

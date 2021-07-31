import { GameEngine } from ".";
import { ISquare } from "../store/tilesGame/types";
import { isObjectEmpty, getMaxKey, getMinKey } from "../utils/common";

export const solver = (tiles: ISquare[][]) => {
  let result = { square: tiles, isGameCompleted: false };
  const originColorsCount: { [key: string]: number } = {};

  const getTile = (row: number, col: number) => {
    try {
      return tiles[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  const getColorTotalCount = (color: string) => {
    return tiles.flat(2).filter((tile) => !tile.origin && tile.color === color)
      .length;
  };

  const getLowestColorIfTie = (color: string) => {
    const tieColors = Object.keys(originColorsCount).filter((colorKey) => {
      return originColorsCount[colorKey] === originColorsCount[color];
    });

    const tieColorsCount: { [key: string]: number } = {};
    if (tieColors.length > 1) {
      tieColors.forEach((tieColor) => {
        tieColorsCount[tieColor] = getColorTotalCount(tieColor);
      });
      return getMinKey(tieColorsCount);
    }
    return color;
  };

  const getLargestNumColor = () => {
    const largestNumColor = getMaxKey(originColorsCount);
    const finalColor = getLowestColorIfTie(largestNumColor);
    originColorsCount[finalColor] = 0;
    return finalColor;
  };

  const getOriginConnectedColorsCount = (row: number, col: number) => {
    [col, row].forEach((item, index) => {
      let colItem = index === 0 ? col + 1 : col;
      let rowItem = index === 1 ? row + 1 : row;

      const currentTile = getTile(row, col);
      const nextTile = getTile(rowItem, colItem);

      if (
        nextTile.color &&
        ((currentTile.origin && currentTile.color !== nextTile.color) ||
          (currentTile.color === nextTile.color && !nextTile.origin))
      ) {
        originColorsCount[nextTile.color] =
          originColorsCount[nextTile.color] + 1 || 1;
        getOriginConnectedColorsCount(rowItem, colItem);
      } else if (nextTile.origin) {
        getOriginConnectedColorsCount(rowItem, colItem);
      }
    });
  };
  getOriginConnectedColorsCount(0, 0);

  if (!isObjectEmpty(originColorsCount)) {
    const color = getLargestNumColor();
    const gameEngine = new GameEngine(tiles, color);
    result.square = gameEngine.updateOrigin();
    result.isGameCompleted = gameEngine.isGameCompleted();
  }

  return result;
};

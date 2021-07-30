import { updateOrigin } from ".";
import { ISquare } from "../store/tilesGame/types";

const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export const solver = (tiles: ISquare[][]) => {
  let result = { square: tiles, isGameCompleted: false };

  const colorsCount: { [key: string]: number } = {};

  const getTile = (row: number, col: number) => {
    try {
      return tiles[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  const getLargestNumColor = () => {
    const largestNumColor = Object.keys(colorsCount).reduce(
      (previousValue, currentValue) =>
        colorsCount[previousValue] > colorsCount[currentValue]
          ? previousValue
          : currentValue
    );
    colorsCount[largestNumColor] = 0;
    return largestNumColor;
  };

  const getColorsCount = (row: number, col: number) => {
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
        colorsCount[nextTile.color] = colorsCount[nextTile.color] + 1 || 1;
        getColorsCount(rowItem, colItem);
      } else if (nextTile.origin) {
        getColorsCount(rowItem, colItem);
      }
    });
  };

  getColorsCount(0, 0);

  if (!isObjectEmpty(colorsCount)) {
    const color = getLargestNumColor();
    result = updateOrigin(tiles, color);
  }

  return result;
};

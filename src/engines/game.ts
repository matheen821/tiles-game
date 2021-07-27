import { ISquare } from "../store/tilesGame/types";

const createTiles = (cols: number, rows: number, colors: string[]) =>
  Array.from({ length: cols }).map((v, l) =>
    Array.from({ length: rows }).map((x, c) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      origin: l + c === 0,
    }))
  );

const updateOrigin = (map: ISquare[][], color: string) => {
  let square = [...map];

  const get = (row: number, col: number) => {
    try {
      return square[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  const treeSearch = (row: number, col: number) => {
    if (square[row][col].color === color) {
      square[row][col].origin = true;
    }

    if (square[row][col].origin) {
      square[row][col].color = color;
    }

    if ((get(row + 1, col).color === color) !== get(row + 1, col).origin) {
      treeSearch(row + 1, col);
    }

    if ((get(row, col + 1).color === color) !== get(row, col + 1).origin) {
      treeSearch(row, col + 1);
    }

    if ((get(row - 1, col).color === color) !== get(row - 1, col).origin) {
      treeSearch(row - 1, col);
    }

    if ((get(row, col - 1).color === color) !== get(row, col - 1).origin) {
      treeSearch(row, col - 1);
    }
  };

  treeSearch(0, 0);

  return square;
};

export { createTiles, updateOrigin };

import { ISquare } from "../store/tilesGame/types";

const createTiles = (cols: number, rows: number, colors: string[]) => {
  return Array.from({ length: cols }).map((rowItem, row) => {
    return Array.from({ length: rows }).map((colItem, col) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      origin: row + col === 0,
    }));
  });
};

const updateOrigin = (previousSquare: ISquare[][], color: string) => {
  let square = [...previousSquare];

  const getTile = (row: number, col: number) => {
    try {
      return square[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  const updateTileSearch = (row: number, col: number) => {
    if (square[row][col].color === color) {
      square[row][col].origin = true;
    }

    if (square[row][col].origin) {
      square[row][col].color = color;
    }

    if (
      (getTile(row + 1, col).color === color) !==
      getTile(row + 1, col).origin
    ) {
      updateTileSearch(row + 1, col);
    }

    if (
      (getTile(row, col + 1).color === color) !==
      getTile(row, col + 1).origin
    ) {
      updateTileSearch(row, col + 1);
    }

    if (
      (getTile(row - 1, col).color === color) !==
      getTile(row - 1, col).origin
    ) {
      updateTileSearch(row - 1, col);
    }

    if (
      (getTile(row, col - 1).color === color) !==
      getTile(row, col - 1).origin
    ) {
      updateTileSearch(row, col - 1);
    }
  };
  updateTileSearch(0, 0);

  const isGameCompleted = () => {
    return square.flat(2).every((tile) => tile.origin);
  };

  return { square, isGameCompleted: isGameCompleted() };
};

export { createTiles, updateOrigin };

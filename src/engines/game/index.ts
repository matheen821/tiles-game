import { ISquare } from "../../store/tilesGame/types";

const createTiles = (cols: number, rows: number, colors: string[]) => {
  return Array.from({ length: cols }).map((rowItem, row) => {
    return Array.from({ length: rows }).map((colItem, col) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      origin: row + col === 0,
    }));
  });
};

class GameEngine {
  square: ISquare[][];
  color: string;

  constructor(previousSquare: ISquare[][], color: string) {
    this.square = JSON.parse(JSON.stringify(previousSquare));
    this.color = color;
    this.updateOrigin();
  }

  getTile = (row: number, col: number) => {
    try {
      return this.square[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  updateOrigin = (row = 0, col = 0) => {
    if (this.square[row][col].color === this.color) {
      this.square[row][col].origin = true;
    }

    if (this.square[row][col].origin) {
      this.square[row][col].color = this.color;
    }

    if (
      (this.getTile(row + 1, col).color === this.color) !==
      this.getTile(row + 1, col).origin
    ) {
      this.updateOrigin(row + 1, col);
    }

    if (
      (this.getTile(row, col + 1).color === this.color) !==
      this.getTile(row, col + 1).origin
    ) {
      this.updateOrigin(row, col + 1);
    }

    if (
      (this.getTile(row - 1, col).color === this.color) !==
      this.getTile(row - 1, col).origin
    ) {
      this.updateOrigin(row - 1, col);
    }

    if (
      (this.getTile(row, col - 1).color === this.color) !==
      this.getTile(row, col - 1).origin
    ) {
      this.updateOrigin(row, col - 1);
    }
    return this.square;
  };

  isGameCompleted = () => {
    return this.square.flat(2).every((tile) => tile.origin);
  };
}

export { createTiles, GameEngine };

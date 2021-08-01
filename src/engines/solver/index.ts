import { GameEngine } from "..";
import { ISquare } from "../../store/tilesGame/types";
import { isObjectEmpty, getMaxKey, getMinKey } from "../../utils/common";

export class Solver {
  tiles: ISquare[][];
  isSolveAllSteps = true;
  isGameCompleted = false;
  originColorsCount: { [key: string]: number } = {};

  constructor(square: ISquare[][], isSolveAllSteps = true) {
    this.tiles = JSON.parse(JSON.stringify(square));
    this.isSolveAllSteps = isSolveAllSteps;
    this.startSolver();
  }

  getTile = (row: number, col: number) => {
    try {
      return this.tiles[row][col] || { color: "", origin: false };
    } catch (e) {
      return { color: "", origin: false };
    }
  };

  getColorTotalCount = (color: string) => {
    return this.tiles
      .flat(2)
      .filter((tile) => !tile.origin && tile.color === color).length;
  };

  getLowestColorIfTie = (color: string) => {
    const tieColors = Object.keys(this.originColorsCount).filter((colorKey) => {
      return this.originColorsCount[colorKey] === this.originColorsCount[color];
    });

    const tieColorsCount: { [key: string]: number } = {};
    if (tieColors.length > 1) {
      tieColors.forEach((tieColor) => {
        tieColorsCount[tieColor] = this.getColorTotalCount(tieColor);
      });
      return getMinKey(tieColorsCount);
    }
    return color;
  };

  getLargestNumColor = () => {
    const largestNumColor = getMaxKey(this.originColorsCount);
    const finalColor = this.getLowestColorIfTie(largestNumColor);
    this.originColorsCount[finalColor] = 0;
    return finalColor;
  };

  getOriginConnectedColorsCount = (row = 0, col = 0) => {
    [col, row].forEach((item, index) => {
      let colItem = index === 0 ? col + 1 : col;
      let rowItem = index === 1 ? row + 1 : row;

      const currentTile = this.getTile(row, col);
      const nextTile = this.getTile(rowItem, colItem);

      if (
        nextTile.color &&
        ((currentTile.origin && currentTile.color !== nextTile.color) ||
          (currentTile.color === nextTile.color && !nextTile.origin))
      ) {
        this.originColorsCount[nextTile.color] =
          this.originColorsCount[nextTile.color] + 1 || 1;
        this.getOriginConnectedColorsCount(rowItem, colItem);
      } else if (nextTile.origin) {
        this.getOriginConnectedColorsCount(rowItem, colItem);
      }
    });
  };

  startSolver = () => {
    this.getOriginConnectedColorsCount();
    if (!isObjectEmpty(this.originColorsCount)) {
      const color = this.getLargestNumColor();
      const gameEngine = new GameEngine(this.tiles, color);
      this.tiles = gameEngine.square;
      this.isGameCompleted = gameEngine.isGameCompleted();

      if (this.isSolveAllSteps && !this.isGameCompleted) {
        this.startSolver();
      }
    }
  };
}

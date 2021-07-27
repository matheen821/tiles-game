import { TilesRowsAndColsEnum } from "../../utils";

export interface ITilesGameState {
  rows: number;
  cols: number;
  allColors: string[];
  selectedColors: string[];
  selectedColor: string;
  isGameStart: boolean;
  score: number;
  highScore: number;
  square: ISquare[][];
}

export type ContainerState = ITilesGameState;

export interface ISquare {
  color: string;
  origin: boolean;
}
export interface IRowsAndColsCount {
  count: number;
  type: TilesRowsAndColsEnum;
}

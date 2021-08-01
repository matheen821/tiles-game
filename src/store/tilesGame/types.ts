import { ControlNameEnum } from "../../utils";

export interface ITilesGameState {
  rows: number;
  cols: number;
  colorsCount: number;
  selectedColor: string;
  isGameStart: boolean;
  moves: number;
  bestMoves: number;
  square: ISquare[][];
  isGameCompleted: boolean;
  recordedMoves: IRecordedMove[];
  isViewMovesMode: boolean;
  viewMovesIndex: number;
  isSolveAll: boolean;
}

export type ContainerState = ITilesGameState;

export interface ISquare {
  color: string;
  origin: boolean;
}
export interface IControlAction {
  count: number;
  type: ControlNameEnum;
}

export interface IRecordedMove {
  moves: number;
  square: ISquare[][];
}

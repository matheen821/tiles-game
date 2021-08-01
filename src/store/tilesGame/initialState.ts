import { ContainerState } from "./types";

export const initialState: ContainerState = {
  rows: 6,
  cols: 6,
  colorsCount: 4,
  selectedColor: "",
  isGameStart: false,
  moves: 0,
  bestMoves: 0,
  square: [],
  isGameCompleted: false,
  recordedMoves: [],
  isViewMovesMode: false,
  viewMovesIndex: 0,
  isSolveAll: false,
};

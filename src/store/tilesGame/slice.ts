/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TilesRowsAndColsEnum } from "../../utils";
import { ContainerState, IRowsAndColsCount } from "./types";
import { createTiles, updateOrigin } from "../../engines";

export const initialState: ContainerState = {
  rows: 6,
  cols: 6,
  allColors: [],
  selectedColors: ["red", "Blue", "Yellow"],
  selectedColor: "",
  isGameStart: false,
  score: 0,
  highScore: 0,
  square: [],
};

const tilesGameSlice = createSlice({
  name: "tilesGameState",
  initialState,
  reducers: {
    setRowsAndCols(
      state,
      { payload: { count, type } }: PayloadAction<IRowsAndColsCount>
    ) {
      if (type === TilesRowsAndColsEnum.Rows) {
        state.rows = state.rows + count || state.rows;
      } else {
        state.cols = state.cols + count || state.cols;
      }
    },
    setSquare(state) {
      state.isGameStart = true;
      state.square = createTiles(state.cols, state.rows, state.selectedColors);
    },
    setOrigin(state, { payload }: PayloadAction<string>) {
      state.selectedColor = payload;
      state.square = updateOrigin(state.square, state.selectedColor);
    },
  },
});

export const {
  actions: tilesGameActions,
  reducer: tilesGameReducer,
  name: tilesGameSliceKey,
} = tilesGameSlice;

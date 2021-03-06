/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomColors, ControlNameEnum } from "../../utils";
import { IControlAction } from "./types";
import { initialState } from "./initialState";
import { createTiles, GameEngine, Solver } from "../../engines";

const tilesGameSlice = createSlice({
  name: "tilesGameState",
  initialState,
  reducers: {
    setControlActionsData(
      state,
      { payload: { count, type } }: PayloadAction<IControlAction>
    ) {
      if (type === ControlNameEnum.Rows) {
        const rowsCount = state.rows + count;
        state.rows = rowsCount > 0 && rowsCount <= 10 ? rowsCount : state.rows;
      } else if (type === ControlNameEnum.Cols) {
        const colsCount = state.cols + count;
        state.cols = colsCount > 0 && colsCount <= 10 ? colsCount : state.cols;
      } else if (type === ControlNameEnum.Colors) {
        const updatedCount = state.colorsCount + count;
        state.colorsCount =
          updatedCount >= 4 ? updatedCount : state.colorsCount;
      } else if (type === ControlNameEnum.ViewMoves) {
        const updatedViewMovesIndex = state.viewMovesIndex + count;
        if (updatedViewMovesIndex < state.recordedMoves.length) {
          state.viewMovesIndex = updatedViewMovesIndex;
          tilesGameSlice.caseReducers.viewMoves(state);
        }
      }

      if (type !== ControlNameEnum.ViewMoves) {
        tilesGameSlice.caseReducers.stopAndResetGame(state);
      }
    },
    setSquare(state) {
      state.square = createTiles(
        state.cols,
        state.rows,
        generateRandomColors(state.colorsCount)
      );
      tilesGameSlice.caseReducers.setRecordedMoves(state);
    },
    startGame(state) {
      tilesGameSlice.caseReducers.setBestMoves(state);
      state.isGameStart = true;
      state.isGameCompleted = false;
      state.moves = 0;
      state.viewMovesIndex = 0;
      state.isViewMovesMode = false;
      state.recordedMoves = [];
      state.isSolveAll = false;
      tilesGameSlice.caseReducers.setSquare(state);
    },
    resetGame(state) {
      state.viewMovesIndex = 0;
      state.isViewMovesMode = false;
      state.isGameCompleted = false;
      state.moves = 0;
      state.isSolveAll = false;
      if (state.recordedMoves.length) {
        state.square = state.recordedMoves[0]?.square;
        state.recordedMoves = [];
        tilesGameSlice.caseReducers.setRecordedMoves(state);
      }
    },
    setOrigin(state, { payload }: PayloadAction<string>) {
      state.selectedColor = payload;
      const gameEngine = new GameEngine(state.square, state.selectedColor);
      state.square = gameEngine.square;
      state.isGameCompleted = gameEngine.isGameCompleted();
      state.moves++;
      tilesGameSlice.caseReducers.setRecordedMoves(state);
      if (state.isGameCompleted) {
        tilesGameSlice.caseReducers.setBestMoves(state);
        state.isViewMovesMode = false;
      }
    },
    setBestMoves(state) {
      if (
        (state.moves && state.moves < state.bestMoves) ||
        state.bestMoves === 0
      ) {
        state.bestMoves = state.moves;
      }
    },
    stopAndResetGame(state) {
      state.isGameStart = false;
      state.moves = 0;
      state.bestMoves = 0;
      state.isGameCompleted = false;
      state.isSolveAll = false;
    },
    setIsSolveAll(state) {
      state.isSolveAll = !state.isSolveAll;
    },
    solveByComputer(state) {
      const solver = new Solver(state.square, false);
      state.square = solver.tiles;
      state.isGameCompleted = solver.isGameCompleted;
      state.moves = state.moves + 1;
      tilesGameSlice.caseReducers.setRecordedMoves(state);

      if (state.isGameCompleted) {
        tilesGameSlice.caseReducers.setBestMoves(state);
        state.isViewMovesMode = false;
      }
    },
    setRecordedMoves(state) {
      state.recordedMoves = [
        ...state.recordedMoves,
        { moves: state.moves, square: state.square },
      ];
    },
    setIsViewMovesMode(state) {
      state.isViewMovesMode = !state.isViewMovesMode;
      if (state.isViewMovesMode || state.isGameCompleted) {
        state.viewMovesIndex = state.recordedMoves.length - 1;
        tilesGameSlice.caseReducers.viewMoves(state);
      }
    },
    viewMoves(state) {
      if (state.viewMovesIndex >= 0) {
        const { square, moves } = state.recordedMoves[state.viewMovesIndex];
        state.square = square;
        state.moves = moves;
      }
    },
  },
});

export const {
  actions: tilesGameActions,
  reducer: tilesGameReducer,
  name: tilesGameSliceKey,
} = tilesGameSlice;

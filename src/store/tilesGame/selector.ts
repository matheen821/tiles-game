import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { initialState } from "./slice";

const selectDomain = (state: RootState) =>
  state.tilesGameReducer || initialState;

export const tilesGameStateSelector = createSelector(
  [selectDomain],
  (sbAwardShiftState) => sbAwardShiftState
);

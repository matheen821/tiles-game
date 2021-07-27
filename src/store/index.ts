import { configureStore } from "@reduxjs/toolkit";
import { tilesGameReducer } from "./tilesGame";

export const store = configureStore({
  reducer: {
    tilesGameReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./plaeyrSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

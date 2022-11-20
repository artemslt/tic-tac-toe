import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  startIcon: true,
  xWins: 0,
  oWins: 0,
  draw: 0,
};
const plaeyrSlice = createSlice({
  name: "player",
  initialState: tasksInitialState,
  reducers: {
    firstPlayer: (state, action): void => {
      state.startIcon = action.payload;
    },
    xWinsIncriment: (state, action): void => {
      state.xWins += 1;
    },
    oWinsIncriment: (state, action): void => {
      state.oWins += 1;
    },
    drawWinsIncriment: (state, action): void => {
      state.draw += 1;
    },
  },
});

export const {
  firstPlayer,
  xWinsIncriment,
  oWinsIncriment,
  drawWinsIncriment,
} = plaeyrSlice.actions;
export const playerReducer = plaeyrSlice.reducer;

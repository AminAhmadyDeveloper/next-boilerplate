import { createSlice } from "@reduxjs/toolkit";
import { counterSelector } from "@selector/counterSelector";
import { counterActions } from "@actions/counterAction";

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterSelector,
  reducers: counterActions,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

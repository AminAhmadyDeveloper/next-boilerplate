import { PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from "@interfaces/ICounter";

export const counterActions = {
  increment: (state: ICounterState) => {
    state.value += 1;
  },
  decrement: (state: ICounterState) => {
    state.value -= 1;
  },
  incrementByAmount: (state: ICounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
};

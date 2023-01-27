import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, actions) => {
      state.arr.push(actions.payload);
    },
    removeCard: (state, actions) => {
      const newArr = state.arr.filter((el) => el.id !== actions.payload);
      state.arr = newArr;
    },
    filterCard: (state, actions) => {
      actions.payload.filter((el) => el.id === state.arr.map((el) => el.id));
    },
  },
});

export const { addCard, removeCard, filterCard } = cardSlice.actions;
export const CardReducer = cardSlice.reducer;

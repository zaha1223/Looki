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
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export const CardReducer = cardSlice.reducer;

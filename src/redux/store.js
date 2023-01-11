import { configureStore } from "@reduxjs/toolkit";
import { CardReducer } from "./slices";
export const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

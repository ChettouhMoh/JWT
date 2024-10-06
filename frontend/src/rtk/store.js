import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-reducer";

export const myStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

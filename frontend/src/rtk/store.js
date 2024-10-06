import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/user-reducer";

export const myStore = configureStore({
  reducer: {
    auth: authSlice,
  },
});

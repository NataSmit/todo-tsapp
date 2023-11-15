import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/TaskSlice";

export const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

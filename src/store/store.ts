//import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { todoSlice } from './slices/TaskSlice'


export const store = configureStore({
  reducer: todoSlice.reducer,
})

export default store

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

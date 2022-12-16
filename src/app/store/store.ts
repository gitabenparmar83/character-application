import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeSlice from "../../features/Home/homeSlice";

export const store = configureStore({
  reducer: {
    characters: homeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

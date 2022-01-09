import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import paletteSlice from "./PaletteSlice";
import uiSlice from "./UiSlice";

export const store = configureStore({
  reducer: {
    palette: paletteSlice.reducer,
    ui: uiSlice.reducer
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;

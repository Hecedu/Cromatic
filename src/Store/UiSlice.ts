import { createSlice } from "@reduxjs/toolkit";

interface UiState {
    displayProperties: boolean;
}

const initialUiState: UiState = {
    displayProperties: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        setDisplayProperties(state, action) {
            state.displayProperties = action.payload.displayProperties;
        }
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
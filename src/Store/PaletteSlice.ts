import { createSlice } from "@reduxjs/toolkit";

interface PaletteState {
    selectedColors: string[];
}

const initialPaletteState: PaletteState = {
    selectedColors: ['#942c2c','#942c2c','#942c2c'],
};

const paletteSlice = createSlice({
    name: "palette",
    initialState: initialPaletteState,
    reducers: {
        setSelectedColors(state, action) {
            state.selectedColors = action.payload.selectedColors;
        }
    },
});

export const paletteActions = paletteSlice.actions;
export default paletteSlice;
import { createSlice } from "@reduxjs/toolkit";
import chroma from "chroma-js";

interface PaletteState {
    selectedColors: string[];
    method: chroma.InterpolationMode;
    numberOfInputColors: number;
    numberOfOutputColors: number;

}

const initialPaletteState: PaletteState = {
    selectedColors: ['#942c2c','#942c2c','#942c2c'],
    method: 'lab',
    numberOfInputColors: 1,
    numberOfOutputColors: 6,
};

const paletteSlice = createSlice({
    name: "palette",
    initialState: initialPaletteState,
    reducers: {
        setSelectedColors(state, action) {
            state.selectedColors = action.payload.selectedColors;
        },
        setMethod(state,action) {
            state.method = action.payload.method;
        },
        setNumberOfInputColors(state, action) {
            state.numberOfInputColors = action.payload.numberOfInputColors;
        },
        setNumberOfOutputColors(state, action) {
            state.numberOfOutputColors = action.payload.numberOfOutputColors;
        }
    },
});

export const paletteActions = paletteSlice.actions;
export default paletteSlice;
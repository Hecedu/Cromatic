import { createSlice } from "@reduxjs/toolkit";
import chroma from "chroma-js";

interface PaletteState {
    selectedColors: string[];
    outputColors: string[];
    colorGenerationMode: chroma.InterpolationMode;
    numberOfInputColors: number;
    numberOfOutputColors: number;

}

const initialPaletteState: PaletteState = {
    selectedColors: ['#942c2c','#942c2c','#942c2c'],
    outputColors: [],
    colorGenerationMode: 'lab',
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
        setOutputColors(state, action) {
            state.outputColors = action.payload.outputColors;
        },
        setMethod(state,action) {
            state.colorGenerationMode = action.payload.method;
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
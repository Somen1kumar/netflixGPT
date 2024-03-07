import { createSlice } from "@reduxjs/toolkit";


const GptAiSlicer = createSlice({

    name: 'GptToggle',
    initialState: {
        showGptLayout: false
    },
    reducers: {
        toggleSearchComponent: (state,action) => {
            state.showGptLayout = !state.showGptLayout;
        }
    }
});

export const {toggleSearchComponent} = GptAiSlicer.actions;
export default GptAiSlicer.reducer;
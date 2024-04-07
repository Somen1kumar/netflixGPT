import { createSlice } from "@reduxjs/toolkit";


const GptAiSlicer = createSlice({

    name: 'GptToggle',
    initialState: {
        showGptLayout: false,
        filteredMovies: []
    },
    reducers: {
        toggleSearchComponent: (state,action) => {
            state.showGptLayout = action.payload;
        },
        addFilteredMovies: (state,action) => {
            state.filteredMovies = action.payload;
        }
    }
});

export const {toggleSearchComponent, addFilteredMovies} = GptAiSlicer.actions;
export default GptAiSlicer.reducer;
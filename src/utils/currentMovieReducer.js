import { createSlice } from "@reduxjs/toolkit";


const CurrentMovieReducer = createSlice({

    name: 'currentMovie',
    initialState : {
        currentMovieData: [],
        currentActorsData: []
    },
    reducers: {
        addCurrentMovie : (state,action) => {
            state.currentMovieData = action.payload;
        },
        addCurrentActors : (state,action) => {
            state.currentActorsData = action.payload;
        }
    }
});

export const {addCurrentMovie,addCurrentActors} = CurrentMovieReducer.actions;

export default CurrentMovieReducer.reducer;
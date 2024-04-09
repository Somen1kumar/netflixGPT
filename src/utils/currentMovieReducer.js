import { createSlice } from "@reduxjs/toolkit";


const CurrentMovieReducer = createSlice({

    name: 'currentMovie',
    initialState : {
        currentMovieData: [],
        currentActorsData: [],
        currentMovieVideos: []
    },
    reducers: {
        addCurrentMovie : (state,action) => {
            state.currentMovieData = action.payload;
        },
        addCurrentActors : (state,action) => {
            state.currentActorsData = action.payload;
        },
        addCurrentVideos: (state,action) => {
            state.currentMovieVideos = action.payload;
        }
    }
});

export const {addCurrentMovie,addCurrentActors, addCurrentVideos} = CurrentMovieReducer.actions;

export default CurrentMovieReducer.reducer;
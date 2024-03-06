import {createSlice} from "@reduxjs/toolkit"


const MovieReducer = createSlice({
    name: "movieSlice",
    initialState: {
        movies: []
    },
    reducers: {
        addMovieReducer: (state, action) => {
            // state.movies.push(action.payload);
            return action.payload;
        }
    }
});

export const {addMovieReducer} = MovieReducer.actions;
export default MovieReducer.reducer;
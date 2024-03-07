import {createSlice} from "@reduxjs/toolkit"


const MovieReducer = createSlice({
    name: "movieSlice",
    initialState: {
        movies: [],
        upComingMovies: [],
        topRated: []
    },
    reducers: {
        addMovieReducer: (state, action) => {
            state.movies = action.payload;
            // return action.payload;
        },
        addPopularMovie: (state,action) => {
            state.upComingMovies = action.payload;
        },
        addTopRatedMovie: (state,action) => {
            state.topRated = action.payload;
        }
    }
});

export const {addMovieReducer,addPopularMovie,addTopRatedMovie} = MovieReducer.actions;
export default MovieReducer.reducer;
import { createSlice } from "@reduxjs/toolkit";


const HomeVideoReducer = createSlice({
    name: 'currentMovieCode',
    initialState: {
        currentMovieCode: ''
    },
    reducers: {
        addCurrentMovieCode : (state,action) => {
            state.currentHeroData = action.payload;
        }
    }
});

export const {addCurrentMovieCode, } = HomeVideoReducer.actions;
export default HomeVideoReducer.reducer;
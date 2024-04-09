import { createSlice } from "@reduxjs/toolkit";


const HomeVideoReducer = createSlice({
    name: 'heroVideo',
    initialState: {
        currentHeroData : [],
        toggleBar: false
    },
    reducers: {
        addCurrentHeroVideo : (state,action) => {
            state.currentHeroData = action.payload;
        },
        addToggleEnabler: (state,action) => {
            state.toggleBar = action.payload;
        }
    }
});

export const {addCurrentHeroVideo, addToggleEnabler} = HomeVideoReducer.actions;
export default HomeVideoReducer.reducer;
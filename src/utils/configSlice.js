import { createSlice } from "@reduxjs/toolkit";


const ConfigureSlice = createSlice({

    name: 'Language',
    initialState:{
        configureLanguage: 'en-US'
    },
    reducers: {
        updateLanguageReducer: (state,action) => {
            state.configureLanguage = action.payload;
        }
    }
});

export const {updateLanguageReducer} = ConfigureSlice.actions;
export default ConfigureSlice.reducer;
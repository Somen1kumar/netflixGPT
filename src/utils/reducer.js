import { createSlice } from "@reduxjs/toolkit";


const Slicer = createSlice({
    name:"credentialStore",
    initialState: {
        credentials: []
    },
    reducers: {
        addReducers: (state,action) => {
            // state.credentials.push(action.payload);
            return action.payload;
        },
        deleteUser: (state,action) => {
            // state.credentials.push(action.payload);
            return [];
        }
    }
});

export const {addReducers, deleteUser} = Slicer.actions;
export default Slicer.reducer;
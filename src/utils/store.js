import { configureStore } from "@reduxjs/toolkit";
import Slicer from './reducer'
import MovieReducer from './movieReducer';

const AppStore = configureStore({
    reducer : {
        credentialHolder: Slicer,
        movieHolder: MovieReducer
    }
});

export default AppStore;
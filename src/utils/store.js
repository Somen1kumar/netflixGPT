import { configureStore } from "@reduxjs/toolkit";
import Slicer from './reducer'
import MovieReducer from './movieReducer';
import toggleSearchComponent from "./gptSearchReducer";
import ConfigureSlice from "./configSlice";

const AppStore = configureStore({
    reducer : {
        credentialHolder: Slicer,
        movieHolder: MovieReducer,
        GptLayoutSwitch: toggleSearchComponent,
        Language: ConfigureSlice
    }
});

export default AppStore;
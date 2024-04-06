import { configureStore } from "@reduxjs/toolkit";
import Slicer from './reducer'
import MovieReducer from './movieReducer';
import toggleSearchComponent from "./gptSearchReducer";
import ConfigureSlice from "./configSlice";
import currentMovieReducer from "./currentMovieReducer";

const AppStore = configureStore({
    reducer : {
        credentialHolder: Slicer,
        movieHolder: MovieReducer,
        GptLayoutSwitch: toggleSearchComponent,
        Language: ConfigureSlice,
        currentMovie: currentMovieReducer
    }
});

export default AppStore;
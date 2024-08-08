import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import movieReducer from "./Slices/movieSlice";
import allReducer from "./Slices/allWatchlistMoviesSeriesSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        allWatchlistMoviesSeries: allReducer,
    }
})

export default store;



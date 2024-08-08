import { createSlice } from "@reduxjs/toolkit";

export const allWatchlistMoviesSeriesSlice = createSlice({
    name: "allWatchlistMoviesSeries",
    initialState:{
        list: null,
        movies: null,
        series: null
    },
    reducers: {
        addToWatchlist: ( state, action)=>{
            state.list = null;
            state.list = action.payload;
        },
        addToMovies: ( state, action)=>{
            state.movies = null;
            state.movies = action.payload;
        },
        addToSeries: ( state, action)=>{
            state.series = null;
            state.series = action.payload;
        }
    },
})


export const { addToWatchlist, addToMovies, addToSeries } = allWatchlistMoviesSeriesSlice.actions;
export default allWatchlistMoviesSeriesSlice.reducer;



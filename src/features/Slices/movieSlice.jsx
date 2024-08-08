import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name:"movie",
    initialState: {
        recommend: null,
        newDisney: null,
        original: null,
        trending: null,
    },
    reducers: {
        setMovies: ( state, action )=>{
            state.recommend=  null;
            state.newDisney=  null;
            state.original= null;
            state.trending= null;
            state.recommend= action.payload.recommend;
            state.newDisney= action.payload.newDisney;
            state.original= action.payload.original;
            state.trending= action.payload.trending;
        },
    }
})

export const { setMovies} = movieSlice.actions;
export default movieSlice.reducer;





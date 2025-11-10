import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addUpComingMovie:(state,action)=>{
            state.upComingMovies= action.payload;
        }
    }
})

export const { addNowPlayingMovie, addPopularMovie, addUpComingMovie} = moviesSlice.actions;

export default moviesSlice.reducer;
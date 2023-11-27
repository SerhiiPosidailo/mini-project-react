import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interface/interfaceMovies";

interface IState {
    total_pages: number
    movies: IMovie[]
    moviesByGenres: IMovie[]
}

const initialState:IState = {
    total_pages:500,
    movies:[],
    moviesByGenres: []
};

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
});

const {reducer:moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions
}

export {
    moviesActions,
    moviesReducer
}
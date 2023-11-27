import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interface/interfaceMovies";
import {AxiosError} from "axios";
import {moviesService} from "../../service/moviesService";

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

const getMovies = createAsyncThunk<IMovies, { page: string}>(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.movies = results
                state.total_pages = total_pages
            })
});

const {reducer:moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies
}

export {
    moviesActions,
    moviesReducer
}
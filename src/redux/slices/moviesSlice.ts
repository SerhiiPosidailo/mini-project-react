import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, IMovies} from "../../interface/interfaceMovies";
import {AxiosError} from "axios";
import {moviesService} from "../../service/moviesService";
import {IGanre, IGanres} from "../../interface/interfaceGanre";
import {genresService} from "../../service/genreServica";
import {movieInfoService} from "../../service/moviesInfoService";

interface IState {
    total_pages: number,
    movies: IMovie[],
    moviesByGenres: IMovie[],
    genres:IGanre[],
    movieById: IMovie,
}

const initialState: IState = {
    total_pages: 500,
    movies:[],
    moviesByGenres: [],
    genres: [],
    movieById: null,
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

const getMovieById = createAsyncThunk<IMovie, {id: string}>(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieInfoService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const getGenres = createAsyncThunk<IGanres<IGanre>, void>(
    'moviesSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IMovies, {id:string, page:string}>(
    'moviesSlice/getMovieByGenre',
    async ({id, page}, {rejectWithValue}) =>{
        try {
            const {data} = await genresService.getMovieById(id, page);
            return data
        }catch (e) {
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
            .addCase(getMovieById.fulfilled, (state, action) => {
                  state.movieById = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addMatcher(isFulfilled(getMovies, getMoviesByGenre), (state, action) => {
                const {total_pages, results} = action.payload
                state.movies = results
                state.total_pages = total_pages
            })
});

const {reducer:moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies,
    getGenres,
    getMovieById,
    getMoviesByGenre

}

export {
    moviesActions,
    moviesReducer
}
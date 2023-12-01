import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGanre, IGanres, IMovie, IMovies} from "../../interface";
import {genresService, movieInfoService, moviesService} from "../../service";



interface IState {
    total_pages: number,
    movies: IMovie[],
    moviesByGenres: IMovie[],
    genres: IGanre[],
    movieById: IMovie,
}

const initialState: IState = {
    total_pages: 500,
    movies: [],
    moviesByGenres: [],
    genres: [],
    movieById: null,
};

const getMovies = createAsyncThunk<IMovies, { page: string }>(
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

const getMovieById = createAsyncThunk<IMovie, { id: string }>(
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

const getMoviesByGenre = createAsyncThunk<IMovies, { id: string, page: string }>(
    'moviesSlice/getMovieByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getMovieById(id, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const searchMovies = createAsyncThunk<IMovies, { page: string, query: string }>(
    'moviesSlice/getMoviesByKeyWord',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMoviesQuery(query, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder

            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })

            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })

            .addMatcher(isFulfilled(getMoviesByGenre, getMovies), (state, action) => {
                const {results} = action.payload
                state.movies = results
            })

            .addMatcher(isFulfilled(searchMovies), (state, action) => {
                const {total_pages, results} = action.payload
                state.movies = results
                state.total_pages = total_pages
            })
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies,
    getGenres,
    getMovieById,
    getMoviesByGenre,
    searchMovies

}

export {
    moviesActions,
    moviesReducer
}
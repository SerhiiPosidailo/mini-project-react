import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux";
import {MoviesByGenres} from "../components";

const GenresIdPage = () => {

    const {id} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') || '1'

    const {movies, total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({id, page}))
    }, [id, dispatch, page]);

    return (
        <div>
            <MoviesByGenres movies={movies} setQuery={setQuery} page={page} maxPage={total_pages}/>
        </div>
    );
};

export {GenresIdPage};
import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux";
import {Movies} from "../components";

const MoviesPage: React.FC = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') || '1'
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getMovies({page}))
    }, [page, dispatch]);


    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} page={page}/>
        </div>
    );
};

export {
    MoviesPage
};
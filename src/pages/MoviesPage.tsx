import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";
import {Movies} from "../components/MoviesConteiner/Movies/Movies";

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
import React, {useEffect} from 'react';
import {MovieInfo} from "../components/MoviesConteiner/movieInfo/movieInfo";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const MovieInfoPage = () => {

    const {id} = useParams();

    const dispatch = useAppDispatch();
    const {movieById} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
    }, [id, dispatch]);


    return (
        <div>
            {movieById && <MovieInfo/>}
        </div>
    );
};

export {MovieInfoPage};
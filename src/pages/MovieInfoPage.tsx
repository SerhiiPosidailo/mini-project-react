import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux";

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
import React, {useEffect} from 'react';

import {useAppDispatch} from "../hooks";
import {Genres} from "../components";
import {moviesActions} from "../redux";

const GenresPage = () => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, [dispatch]);

    return (
        <div>
            <Genres/>
        </div>
    );
};

export {GenresPage};
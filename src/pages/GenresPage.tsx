import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Genres} from "../components/GenresContainer/Genres/Genres";
import {moviesActions} from "../redux/slices/moviesSlice";

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
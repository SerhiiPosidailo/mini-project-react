import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks/reduxHooks";
import {Genres} from "../components/GenresContainer/Genres";
import {moviesActions} from "../redux/slices/moviesSlice";

const GenresPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, []);

    return (
        <div>
            <Genres/>
        </div>
    );
};

export {GenresPage};
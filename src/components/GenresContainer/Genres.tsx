import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";


const Genres = () => {

    const {genres} = useAppSelector(state => state.movies)

    return (
        <div>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
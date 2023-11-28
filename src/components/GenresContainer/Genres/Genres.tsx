import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {Genre} from "../Genre/Genre";
import css from "./Genres.module.css"


const Genres = () => {

    const {genres} = useAppSelector(state => state.movies)

    return (
        <div className={css.Genres}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
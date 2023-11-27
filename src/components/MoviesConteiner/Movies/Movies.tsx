import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interface/interfaceMovies";
import {SetURLSearchParams} from "react-router-dom";
import {Movie} from "../Movie/movie";
import css from "./Movies.module.css"

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string
    maxPage: number
}

const Movies:FC<IProps> = ({movies, setQuery, page, maxPage}) => {


    return (
            <div className={css.MoviesList}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
    );
};

export {Movies};
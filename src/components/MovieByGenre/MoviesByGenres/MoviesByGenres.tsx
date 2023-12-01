import React, {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interface";
import css from "../../MoviesConteiner/Movies/Movies.module.css";
import {MovieByGenre} from "../MovieByGenre";

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string
    maxPage: number
}

const MoviesByGenres:FC<IProps> = ({movies, setQuery, page , maxPage}) => {

    const handlePagePrev = (): void => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = (): void => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }

    return (
        <>
            <div className={css.MoviesList}>
                {movies.map(movie => <MovieByGenre key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={+page === 1} onClick={(handlePagePrev)}>&lt;prev</button>
                <span><b> {page} page of 500</b></span>
                <button disabled={page === `${maxPage}`} onClick={(handlePageNext)}>next&gt;</button>
            </div>
        </>
    );
};

export {MoviesByGenres};
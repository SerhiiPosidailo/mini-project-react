import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interface/interfaceMovies";
import {SetURLSearchParams} from "react-router-dom";
import {Movie} from "../Movie/movie";
import css from "./Movies.module.css"
import {useAppSelector} from "../../../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string

}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {
    const {total_pages} = useAppSelector(state => state.movies);


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
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={+page === 1} onClick={(handlePagePrev)}>&lt;prev</button>
                <span><b> {page} page of 500</b></span>
                <button disabled={page === `${total_pages}`} onClick={(handlePageNext)}>next&gt;</button>
            </div>
        </>
    );
};

export {Movies};
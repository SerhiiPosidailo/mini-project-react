import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import {SearchForm} from "../../SearchForm/SearchForm";
import {Search} from "../Search/Search";
import css from "./Searches.module.css"

const Searches = () => {

    const [params, setParams] = useSearchParams({page: '1', query: ''});
    const dispatch = useAppDispatch();
    const {movies, total_pages} = useAppSelector(state => state.movies);

    const page: string  = params.get('page') || '1';
    const query: string = params.get('query') || '';


    useEffect(() => {
        dispatch(moviesActions.searchMovies({page, query}))
    }, [page,query, dispatch]);

    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        if (form && form.elements) {
            const query: string = (form.elements.namedItem('search') as HTMLInputElement)?.value || '';
            setParams(prev => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    }

    return (
        <div>
            <div>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <div className={css.allMovie}>
                {movies.map(movie => <Search key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button className={css.btn} onClick={handlePagePrev} disabled={+`${page}` === 1}> prev&lt; </button>
                <span> {page} page of {total_pages}</span>
                <button className={css.btn} onClick={handlePageNext} disabled={page === `${total_pages}`}> next&gt; </button>
            </div>
        </div>
    );
};

export {Searches};
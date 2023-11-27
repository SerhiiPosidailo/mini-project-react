import React, {FC} from 'react';
import {IMovie} from "../../interface/interfaceMovies";


interface IProps {
    movie: IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;
    
    return (
        <div>
            <div>id: {id}</div>
            <div>original_title: {original_title}</div>
            <div>poster_path: {poster_path}</div>
            <div>vote_average: {vote_average}</div>
        </div>
    );
};

export {Movie};
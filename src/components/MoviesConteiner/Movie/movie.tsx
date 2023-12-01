import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interface";
import {urls} from "../../../constants";
import css from "./Movie.module.css"


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;
    const navigate = useNavigate()

    return (
        <div className={css.Movie} onClick={() => navigate(`${movie.id}`, {state: movie})}>
            <img src={urls.poster(poster_path)} alt={original_title}/>
            <div className={css.rating}>
                <Rating
                    iconsCount={10}
                    size={15}
                    initialValue={vote_average}
                    readonly={true}
                    allowFraction={true}
                    emptyColor={'#808080FF'}
                />
            </div>
            <h3>{original_title}</h3>
        </div>
    );
};

export {Movie};
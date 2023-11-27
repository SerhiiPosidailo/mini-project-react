import React, {FC} from 'react';
import {IMovie} from "../../../interface/interfaceMovies";
import {urls} from "../../../constants/urls";
import {Rating} from "react-simple-star-rating";
import css from "./Movie.module.css"
import {useNavigate} from "react-router-dom";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;
    const navigate = useNavigate()

    return (
        <div className={css.Movie} onClick={() => navigate(`${movie.id}`, {state: movie})}>
            <img src={urls.poster(`${poster_path}`)} alt={original_title}/>
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
            <h3>original_title: {original_title}</h3>
        </div>
    );
};

export {Movie};
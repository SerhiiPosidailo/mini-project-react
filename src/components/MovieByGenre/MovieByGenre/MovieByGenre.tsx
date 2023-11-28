import React, {FC} from 'react';
import {IMovie} from "../../../interface/interfaceMovies";
import {Rating} from "react-simple-star-rating";
import {useNavigate} from "react-router-dom";
import css from "./movieBygenre.module.css"

interface IProps {
    movie: IMovie
}

const MovieByGenre:FC<IProps> = ({movie}) => {

    const {original_title,vote_average,poster_path} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.GenresIdMovie} onClick={()=>navigate(`/movies/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>
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

export {MovieByGenre};
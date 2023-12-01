import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from "react-simple-star-rating";

import {IMovie} from "../../../interface";
import {urls} from "../../../constants";
import css from "./Search.module.css"

interface IProps{
    movie: IMovie
}

const Search:FC<IProps> = ({movie}) => {

    const {poster_path, original_title, vote_average} = movie;
    const navigate = useNavigate();

    return (

        <div className={css.Search} onClick={()=>navigate(`/movies/${movie.id}`)}>
            {
                poster_path
                    ?<img src={urls.poster(poster_path)} alt={original_title}/>
                    :<img src={'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'} alt={original_title}/>
            }
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

export {Search};
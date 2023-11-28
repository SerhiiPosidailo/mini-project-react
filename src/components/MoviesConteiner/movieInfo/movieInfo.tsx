import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {Rating} from "react-simple-star-rating";
import css from "./movieInfo.module.css"
import {urls} from "../../../constants/urls";

const MovieInfo = () => {


    const {movieById} = useAppSelector(state => state.movies);

    const {original_title,poster_path,vote_average,release_date,overview} = movieById;


    return (
        <div className={css.MovieInfo}>
            <img src={urls.poster(poster_path)} alt={original_title}/>
            <h1>{original_title}</h1>
            <p><i>{overview}</i></p>
            <div><h1>Rating :</h1></div>
            <Rating
                iconsCount={10}
                size={40}
                initialValue={vote_average}
                readonly={true}
                allowFraction={true}
                SVGstrokeColor={'black'}
                emptyColor={'#808080FF'}
            />
            <div><h1>Release Data :</h1><b>{release_date}</b></div>
        </div>
    );
};

export {MovieInfo};
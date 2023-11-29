import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {Rating} from "react-simple-star-rating";
import css from "./movieInfo.module.css"
import {urls} from "../../../constants/urls";
import {MovieInfoGenre} from "../../GenresContainer/MovieInfoGenre/MovieInfoGenre";

const MovieInfo = () => {


    const {movieById} = useAppSelector(state => state.movies);

    const {original_title,poster_path,vote_average,release_date,overview, popularity,backdrop_path,genres} = movieById;

    return (
        <div className={css.MovieInfo}>
            {
                poster_path
                ?<img src={urls.poster(poster_path)} alt={original_title}/>
                :<img src={'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'} alt={original_title}/>
            }
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
            <h1>Genre :</h1>
            <div className={css.GenreMovie}>
                {genres.map(item => <MovieInfoGenre key={item.id} item={item}/>)}
            </div>
            <div><h1>Popularity :</h1><b>{popularity}</b></div>
            <div><h1>Release Data :</h1><b>{release_date}</b></div>
            <h1>Backdrop :</h1>
            <img src={urls.poster(backdrop_path)} alt={original_title}/>
        </div>
    );
};

export {MovieInfo};
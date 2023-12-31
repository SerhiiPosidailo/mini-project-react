import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from "./MovieInfoGenre.module.css"

interface IProps {
    item:{id:number, name:string}
}

const MovieInfoGenre:FC<IProps> = ({item}) => {
    const {id, name} = item;

    return (
        <div className={css.Nav}>
            <NavLink to={`/genres/${id}`}><h3 className={css.Genre}>{name}</h3></NavLink>
        </div>
    );
};

export {MovieInfoGenre};
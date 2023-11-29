import React, {FC} from 'react';
import css from "./MovieInfoGenre.module.css"

interface IProps {
    item:{id:number, name:string}
}

const MovieInfoGenre:FC<IProps> = ({item}) => {
    const {name} = item;

    return (
        <div>
            <h3 className={css.Genre}>{name}</h3>
        </div>
    );
};

export {MovieInfoGenre};
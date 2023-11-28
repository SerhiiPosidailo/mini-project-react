import React, {FC} from 'react';
import {IGanre} from "../../../interface/interfaceGanre";
import css from "./Genre.module.css"
import {useNavigate} from "react-router-dom";


interface IProps {
    genre:IGanre
}
const Genre:FC<IProps> = ({genre}) => {

    const {name} = genre;

    const navigate = useNavigate();

    return (
        <div className={css.Genre} onClick={()=>navigate(`${genre.id}`)}>
            <div><i>{name}</i></div>
        </div>
    );
};

export {Genre};
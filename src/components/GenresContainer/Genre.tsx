import React, {FC} from 'react';
import {IGanre} from "../../interface/interfaceGanre";


interface IProps {
    genre:IGanre
}
const Genre:FC<IProps> = ({genre}) => {

    const {name} = genre;
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};
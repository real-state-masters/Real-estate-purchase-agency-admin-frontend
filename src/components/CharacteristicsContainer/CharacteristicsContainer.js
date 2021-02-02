import React from 'react';
import { Sofa, Bathroom, Square } from "../PropsContainer/logos";

const CharacteristicsContainer = ({ rooms, bathrooms, area}) => {
    return (
        <div className="prop-item">
            <span className="title">Characteristics</span>
            <div className="characteristics">
                <Sofa>hi</Sofa>
                <span>{rooms}</span>
                <Bathroom></Bathroom>
                <span>{bathrooms}</span>
                <Square></Square>
                <span>{area}</span>
            </div>
        </div>
    )
}

export default CharacteristicsContainer
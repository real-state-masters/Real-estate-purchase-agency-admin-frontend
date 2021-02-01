import React from 'react';
import { Sofa, Bathroom, Square } from "../PropsContainer/logos";

const CharacteristicsContainer = () => {
    return (
        <div className="prop-item">
            <span className="title">Characteristics</span>
            <div className="characteristics">
                <Sofa>hi</Sofa>
                <span>4</span>
                <Bathroom></Bathroom>
                <span>1</span>
                <Square></Square>
                <span>120</span>
            </div>
        </div>
    )
}

export default CharacteristicsContainer
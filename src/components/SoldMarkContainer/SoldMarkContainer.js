import React from 'react'
//import { Sold } from "../PropsContainer/logos";

import './SoldMarkContainer.scss'

const SoldMarkContainer = ( {status} ) => {
    if ( status === 'sold' ) {
        return (
            <div className="prop-item">
                <span className="title">Mark as sold</span>
                <span className="changeStatusColor">¡VENDIDO!</span>
            </div>
        )
    } else {
        return (
            <div className="prop-item">
                <span className="title">Mark as sold</span>
                <span className="changeStatusColor">¡DISPONIBLE!</span>
            </div>
        )
    }
}

export default SoldMarkContainer

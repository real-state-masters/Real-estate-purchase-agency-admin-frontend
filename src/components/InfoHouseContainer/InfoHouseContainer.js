import React from 'react';

import './InfoHouseContainer.scss'

const InfoHouseContainer = ( { image, address }) => {
    return (
        <div className="props-left">
            <div className="prop-item">
                <span className="title">Image</span>
                <img className="img-style" src={image} alt="photohouse"></img>
            </div>
            <div className="prop-item">
                <span className="title">Address</span>
                <div className="address">
                    <span className="street">{address}</span>
                    <span className="city-country">Shaugnessy,BC</span>
                </div>
            </div>
        </div>
    )
}

export default InfoHouseContainer
import React from 'react';

const InfoHouseContainer = () => {
    return (
        <div className="props-left">
            <div className="prop-item">
                <span className="title">Image</span>
                <img src="https://picsum.photos/150/95"></img>
            </div>
            <div className="prop-item">
                <span className="title">Address</span>
                <div className="address">
                    <span className="street">382 W King Edward Ave</span>
                    <span className="city-country">Shaugnessy,BC</span>
                </div>
            </div>
        </div>
    )
}

export default InfoHouseContainer
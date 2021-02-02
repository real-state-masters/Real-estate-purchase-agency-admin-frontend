import React from 'react';

const PriceHouseContainer = ({ price }) => {
    return (
        <div className="prop-item">
            <span className="title">Price</span>
            <span className="price">{price}</span>
        </div>
    )
}

export default PriceHouseContainer
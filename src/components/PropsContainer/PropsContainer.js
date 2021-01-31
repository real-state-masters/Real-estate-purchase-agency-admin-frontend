import React from "react";

import "./PropsContainer.scss";

const PropsContainer = () => {
  return (
    <div className="props-container">
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
      <div className="prop-item">
        <span className="title">Price</span>
        <span className="price">$457,000</span>
      </div>
      <div className="prop-item">
        <span className="title">Characteristics</span>
      </div>
      <div className="prop-item">
        <span className="title">Mark as sold</span>
      </div>
      <div className="prop-item">
        <span className="title">Remove</span>
      </div>
    </div>
  );
};

export default PropsContainer;

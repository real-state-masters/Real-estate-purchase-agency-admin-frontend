import React from "react";
import "./PropsContainer.scss";
import { Sofa, Bathroom, Square, Sold, Remove } from "./logos";

const PropsContainer = () => {
  return (
    <div className="props-container">
      <div className="property">
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

      <div className="prop-item">
        <span className="title">Price</span>
        <span className="price">$457,000</span>
      </div>
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

      <div className="prop-item">
        <span className="title">Mark as sold</span>
        <Sold></Sold>
      </div>
      <div className="prop-item remove-item" style={{ marginRight: "50px" }}>
        <span className="title">Remove</span>
        <Remove></Remove>
      </div>
      </div>
    </div>
  );
};

export default PropsContainer;

import React from "react";
//import { Sold } from "../PropsContainer/logos";

// import './SoldMarkContainer.scss'

const SoldMarkContainer = ({ status }) => {
  if (status) {
    return (
      <div className="prop-item">
        <span className="title">Mark as sold</span>
        <span className="avaliable">AVALIABLE</span>
      </div>
    );
  }

  return (
    <div className="prop-item">
      <span className="title">Mark as sold</span>
      <span className="sold">SOLD</span>
    </div>
  );
};

export default SoldMarkContainer;

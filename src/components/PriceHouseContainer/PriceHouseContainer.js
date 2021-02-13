import React from "react";

import formatter from "../../utils/priceConversion";
const PriceHouseContainer = ({ price }) => {
  return (
    <div className="prop-item">
      <span className="title">Price</span>
      <span className="price">{formatter.format(price)}</span>
    </div>
  );
};

export default PriceHouseContainer;

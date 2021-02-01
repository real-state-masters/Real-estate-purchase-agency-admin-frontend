import React from "react";
import "./PropsContainer.scss";
import InfoHouseContainer from '../InfoHouseContainer/InfoHouseContainer'
import PriceHouseContainer from "../PriceHouseContainer/PriceHouseContainer";
import CharacteristicsContainer from "../CharacteristicsContainer/CharacteristicsContainer";
import SoldMarkContainer from "../SoldMarkContainer/SoldMarkContainer";
import RemoveItemContainer from "../RemoveItemContainer/RemoveItemContainer";


const PropsContainer = () => {
  return (
    <div className="props-container">
      <InfoHouseContainer />
      <PriceHouseContainer />
      <CharacteristicsContainer />
      <SoldMarkContainer />
      <RemoveItemContainer />
    </div>
  );
};

export default PropsContainer;

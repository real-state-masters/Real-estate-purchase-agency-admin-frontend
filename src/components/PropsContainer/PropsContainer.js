import React from "react";
import "./PropsContainer.scss";
import InfoHouseContainer from "../InfoHouseContainer/InfoHouseContainer";
import PriceHouseContainer from "../PriceHouseContainer/PriceHouseContainer";
import CharacteristicsContainer from "../CharacteristicsContainer/CharacteristicsContainer";
import SoldMarkContainer from "../SoldMarkContainer/SoldMarkContainer";
import RemoveItemContainer from "../RemoveItemContainer/RemoveItemContainer";
import EditItemContainer from "../EditItemContainer/EditItemContainer";

const PropsContainer = ({ property }) => {
  return (
      <div className="props-container">
        <InfoHouseContainer image={property.images[0]} address={property.location.address}/>
        <PriceHouseContainer price={property.price}/>
        <CharacteristicsContainer 
          rooms={property.num_rooms} 
          bathrooms={property.num_bathrooms} 
          area={property.area}
        />

        <SoldMarkContainer status={property.status}/>
        <RemoveItemContainer />
      </div>
  );
};

export default PropsContainer;

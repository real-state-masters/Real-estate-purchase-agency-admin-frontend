import React from "react";
import { Redirect } from "react-router-dom";
import "./PropsContainer.scss";
import InfoHouseContainer from '../InfoHouseContainer/InfoHouseContainer'
import PriceHouseContainer from "../PriceHouseContainer/PriceHouseContainer";
import CharacteristicsContainer from "../CharacteristicsContainer/CharacteristicsContainer";
import SoldMarkContainer from "../SoldMarkContainer/SoldMarkContainer";
import RemoveItemContainer from "../RemoveItemContainer/RemoveItemContainer";


const PropsContainer = ({ property }) => {

  const changeDetailsPage = () => {
    console.log('hhola')
    console.log(property._id)
    
    if (typeof property._id !== 'undefined') {
        return <Redirect to='/details' />
    }
  }

  return (
      <div className="props-container" onClick={changeDetailsPage}>
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

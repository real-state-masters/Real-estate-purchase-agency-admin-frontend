import React from "react";
import { connect } from "react-redux";
import InfoResults from "../InfoResults/InfoResults";
import PropsContainer from "../Properties/Properties";
import Filters from "../Filters/Filters";
import EditCard from "../EditCard/EditCard";

const PropertiesContainer = ({ properties, showFilters, showEdit }) => {
  return (
    <>
      {showEdit ? <EditCard /> : null}
      <InfoResults properties={properties} />

      {showFilters ? <Filters /> : null}

      {properties.map((property) => {
        return <PropsContainer key={property.id} property={property} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    properties: state.dashboard.properties,
    showFilters: state.dashboard.showFilters,
    showEdit: state.dashboard.showEdit,
  };
};

export default connect(mapStateToProps)(PropertiesContainer);

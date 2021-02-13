import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import InfoResults from "../components/InfoResults/InfoResults";

const DetailsPropertyPage = ({ properties }) => {
  return (
    <div>
      <Header />
      <InfoResults properties={properties} />
      <div className="courosel-images"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    properties: state.dashboard.properties,
  };
};

export default connect(mapStateToProps)(DetailsPropertyPage);

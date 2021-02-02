import "./Filters.scss";
import React from "react";
import RangeSlider from "./RangeSlider";

import {
  MoreFilters,
  HomeFilters,
  BedroomFilters,
  BathroomFilters,
  ConditionFilters,
  PublicationDateFilter,
  EquipmentFilter,
} from "./FilterTypes";
const Filters = () => {
  return (
    <div className="filter-container">
      <div className="filter-block">
        <HomeFilters></HomeFilters>
        <ConditionFilters></ConditionFilters>
      </div>
      <div className="filter-block">
        <BedroomFilters></BedroomFilters>
        <RangeSlider></RangeSlider>
      </div>
      <div className="filter-block">
        <BathroomFilters></BathroomFilters>
        <PublicationDateFilter></PublicationDateFilter>
      </div>
      <div className="filter-block">
        <EquipmentFilter></EquipmentFilter>
        <MoreFilters></MoreFilters>
      </div>
    </div>
  );
};

export default Filters;

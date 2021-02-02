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
        <div className="filter-type">
          <RangeSlider></RangeSlider>
        </div>
      </div>
      <div className="filter-block">
        <BathroomFilters></BathroomFilters>
        <PublicationDateFilter></PublicationDateFilter>
      </div>
      <div className="filter-block">
        <MoreFilters></MoreFilters>
        <EquipmentFilter></EquipmentFilter>
      </div>
    </div>
  );
};

export default Filters;

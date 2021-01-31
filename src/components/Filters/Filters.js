import React from "react";
import "./Filters.scss";
import { Sofa, Bathroom, Square, Sold, Remove } from "../PropsContainer/logos";

const Filters = () => {
  return (
    <div className="filter-container">
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">Type of home</span>
        </div>
        <div className="filter-type">
          <span className="title">Condition</span>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">Bedrooms</span>
        </div>
        <div className="filter-type">
          <span className="title">Price Range</span>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">Bathrooms</span>
        </div>
        <div className="filter-type">
          <span className="title">Publication date</span>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">Equipment</span>
          <br />
          <select name="equipment" id="equipment">
            <option selected="selected" value="indifferent">
              Indifferent
            </option>

            <option value="indifferent">
              An option with many many many characters
            </option>
          </select>
        </div>
        <div className="filter-type">
          <span className="title">More filters</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;

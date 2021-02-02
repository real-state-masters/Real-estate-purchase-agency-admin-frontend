import "./Filters.scss";

import { Sofa, Bathroom } from "../PropsContainer/logos";
import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([2000, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks
        step={100}
        min={1000}
        max={100000}
      />
    </div>
  );
}

const Filters = () => {
  return (
    <div className="filter-container">
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">Type of home</span>
          <div className="filter-item filter-house">
            <div>
              <div>
                <input type="checkbox" />
                <span>Flat/apartment</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Duplex</span>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" /> <span>House</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Penthouse</span>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-type">
          <span className="title">Condition</span>
          <div className="filter-item filter-house">
            <div>
              <div>
                <input type="checkbox" />
                <span>New Homes</span>
              </div>

              <div>
                <input type="checkbox" />
                <span>Needs renovation</span>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <span>Good condition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">
            Bedrooms <Sofa></Sofa>
            <div className="filter-bedrooms">
              <button>0 (studio flat)</button>
              <button className="nums buttonClick">1</button>
              <button className="nums">2</button>
              <button className="nums">3</button>
              <button className="nums">4 or +</button>
            </div>
          </span>
        </div>
        <div className="filter-type">
          <span className="title">Price Range ($)</span>
          <div className="price-min">$39000</div>
          <span className="hypen">-</span>
          <div className="price-max">$457000</div>
          <br />
          <br />

          <RangeSlider></RangeSlider>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-type">
          <span className="title">
            Bathrooms <Bathroom></Bathroom>
          </span>
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

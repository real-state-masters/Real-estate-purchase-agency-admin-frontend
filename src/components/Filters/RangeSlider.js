import Slider from "@material-ui/core/Slider";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import formatter from "../../utils/priceConversion";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `$ ${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [rangePrice, setRangePrice] = React.useState([2000, 10000]);

  const handleChange = (event, newValue) => {
    setRangePrice(newValue);
  };

  return (
    <div className="filter-type">
      <span className="title">Price Range ($)</span>
      <div className="price-min">{formatter.format(rangePrice[0])}</div>
      <span className="hypen">-</span>
      <div className="price-max">{formatter.format(rangePrice[1])}</div>
      <br />
      <br />
      <div className={classes.root}>
        <Slider
          name="rangeSlider"
          value={rangePrice}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          marks
          step={100}
          min={10000}
          max={100000}
        />
      </div>
    </div>
  );
}

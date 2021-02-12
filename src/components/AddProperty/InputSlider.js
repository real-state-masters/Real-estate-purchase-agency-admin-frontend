import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

export default function InputSlider({
  name,
  min = 50,
  max = 1000,
  inputWidth = 51,
}) {
  const classes = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: inputWidth,
    },
  });
  const [value, setValue] = React.useState(min);

  const handleSliderChange = (event, newValue) => setValue(newValue);
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) setValue(0);
    else if (value > 1000) setValue(1000);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            min={min}
            step={1}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            style={{ marginBottom: "20px" }}
            name={name ? name : null}
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            aria-valuemax="1000"
            inputProps={{
              step: 1,
              min: min,
              max: max,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

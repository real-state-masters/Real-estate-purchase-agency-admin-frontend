import React from "react";
import { Button } from "react-bootstrap";

import InputEdit from "../InputEdit/InputEdit";
import "./FormEdit.scss";

const FormEdit = ({ validateAddress }) => {
  return (
    <div className="form-container">
      <form>
        <InputEdit label={"Street"} placeholder={"street"} />
        <InputEdit label={"Number"} placeholder={"number"} />
        <InputEdit label={"City"} placeholder={"city"} />
        <InputEdit label={"State"} placeholder={"state"} />
        <InputEdit label={"Country"} placeholder={"country"} />
        <div>
          <Button onClick={validateAddress} type="submit">
            Search
          </Button>
        </div>
      </form>
      <div className="map-container"></div>
    </div>
  );
};

export default FormEdit;

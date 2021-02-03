import React from "react";
import { Edit } from "../PropsContainer/logos";

const RemoveItemContainer = () => {
  return (
    <div className="prop-item edit-item" style={{ marginRight: "50px" }}>
      <span className="title">Edit</span>
      <Edit></Edit>
    </div>
  );
};

export default RemoveItemContainer;

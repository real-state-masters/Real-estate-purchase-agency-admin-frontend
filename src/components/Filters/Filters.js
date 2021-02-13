import "./Filters.scss";
import React from "react";
import { connect, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
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
const Filters = ({ properties }) => {
  const state = useSelector((state) => state);

  React.useEffect(() => {
    document.querySelector(".modal-dialog").style.marginRight = "800px";

    // document.querySelectorAll(".modal-content")[0].style.minWidth = "1500px";
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const applyFilters = (inputFilters) => {
    const matches = [];
    let okToDisplay = true;
    properties.forEach(function (property) {
      // type of home
      if (inputFilters.type.includes(property.type)) okToDisplay = true;
      else if (inputFilters.type.length) {
        okToDisplay = false;
        return;
      } else {
        okToDisplay = true;
      }

      //condition
      if (inputFilters.condition.includes(property.condition)) {
        okToDisplay = true;
      } else if (inputFilters.condition.length > 0) {
        okToDisplay = false;
        return;
      } else {
        okToDisplay = true;
      }

      // number of rooms
      if (inputFilters.bedrooms.includes(property.num_rooms)) {
        okToDisplay = true;
      } else if (inputFilters.bedrooms >= 4 && property.num_rooms > 4) {
        okToDisplay = true;
      } else if (inputFilters.bedrooms.length > 0) {
        okToDisplay = false;
        return;
      } else {
        okToDisplay = true;
      }

      // number of bathrooms
      if (inputFilters.bathrooms.includes(property.num_bathrooms)) {
        okToDisplay = true;
      } else if (inputFilters.bathrooms >= 4 && property.num_bathrooms > 3) {
        okToDisplay = true;
      } else if (inputFilters.bathrooms.length > 0) {
        okToDisplay = false;
        return;
      } else {
        okToDisplay = true;
      }

      // Price Range
      if (
        property.price >= inputFilters.priceRange[0] &&
        property.price <= inputFilters.priceRange[1]
      ) {
        okToDisplay = true;
      } else {
        okToDisplay = false;
        return;
      }

      if (okToDisplay) {
        matches.push(property);
      }
    });
    // need to update global state in redux store with
    // the properties inside of matches
  };

  const filter = () => {
    const inputFilters = {
      type: [],
      condition: [],
      bedrooms: [],
      bathrooms: [],
      priceRange: "",
    };

    const inputs = [...document.querySelectorAll("input")];
    const buttons = [...document.querySelectorAll("button")];
    const selects = [...document.querySelectorAll("select")];

    // <----- input Object filters
    inputs.forEach((input) => {
      if (input.name !== "searchBox" && input.checked) {
        switch (input.name) {
          case "type":
            inputFilters.type.push(input.dataset.info);
            break;
          case "condition":
            inputFilters.condition.push(parseInt(input.dataset.info));
            break;
          default:
            break;
        }
      }

      // Price range - special case for input
      if (input.name === "rangeSlider") {
        let priceRange = input.value.split(",").map((price) => parseInt(price));
        inputFilters.priceRange = priceRange;
      }
    });

    buttons.forEach((button) => {
      if (button.classList.contains("buttonClick")) {
        switch (button.name) {
          case "bedrooms":
            inputFilters.bedrooms.push(parseInt(button.dataset.rooms));
            break;
          case "bathrooms":
            inputFilters.bathrooms.push(parseInt(button.dataset.bath));
            break;
          default:
            break;
        }
      }
    });

    applyFilters(inputFilters);
  };

  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        className="modal-filters"
        show={show}
        onHide={handleClose}
        style={{ width: "100%" }}
      >
        <form onSubmit={handleSubmit} className="filter-container">
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
          <button style={{ marginRight: "50px" }} onClick={filter}>
            Filter
          </button>
        </form>

        <Button
          style={{
            position: "absolute",
            top: "15px",
            right: "-700px",
            zIndex: "1000000",
          }}
          variant="secondary"
          onClick={handleClose}
        >
          <span style={{ marginBottom: "10px" }}>x</span>
        </Button>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    properties: state.properties,
  };
};

export default connect(mapStateToProps)(Filters);

import "./Filters.scss";
import React from "react";
import { connect } from 'react-redux'
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
const Filters = ( { properties }) => {
      console.log(properties)

  const handleSubmit = (event) => {
    event.preventDefault()

  }


  const applyFilters = (inputFilters) => {
    console.log(properties)
    const matching = properties.filter(property => {
      return inputFilters.type.includes(property['type'])
    })
    console.log(matching)
  }




  const filter = () => {
    const inputFilters = {
      type: []
    }

    const inputs = [...document.querySelectorAll('input')]
    const buttons = [...document.querySelectorAll('button')]
    const selects = [...document.querySelectorAll('select')]

    // <----- input Object filters
    inputs.map(input => {
      if (input.name !== 'searchBox' && input.checked) {
        switch (input.name) {
          case 'type':
            inputFilters.type.push(input.dataset.info)
          default:
            break;
        }
      }
    })
  console.log(inputFilters.type.includes('duplex'))
  applyFilters(inputFilters)

    // <----- button Object filters
/*
    buttons.map(button => {
      if (button.classList.contains('buttonClick')) {
        inputFilters[button.name] = parseInt(button.innerText)
      }
    })

    // <----- select Object filters

    selects.map(select => {
      inputFilters[select.name] = select.value
    })

     console.log(inputFilters)
  */
  }

  return (
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
      <button onClick={filter}>Filter</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
        properties: state.properties
  }
}

export default connect(mapStateToProps)(Filters);

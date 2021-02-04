import React from "react";

import { Sofa, Bathroom } from "../PropsContainer/logos";

export const MoreFilters = () => {
  return (
    <div className="filter-type">
      <span className="title">More filters</span>
      <div className="filter-item">
        <div>
          <div>
            <input type="checkbox" />
            <span>Pets allowed</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Air conditioning</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Terrace</span>
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" /> <span>Lift</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Swimming pool</span>
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" /> <span>Garden</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeFilters = () => {
  return (
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
  );
};

export const ConditionFilters = () => {
  return (
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
  );
};

export const BedroomFilters = () => {
  const [numRooms, setNumRooms] = React.useState(1);

  const toggleRooms = (event) => {
    if (event.target.tagName === "BUTTON") {
      setNumRooms(event.target.dataset.rooms);
    }
  };

  return (
    <div className="filter-type">
      <span className="title">Bedrooms</span>
      <Sofa />
      <div role="button" className="filter-rooms" onClick={toggleRooms}>
        <button data-rooms={0} className={`${numRooms == 0 && "buttonClick"}`}>
          0 (studio flat)
        </button>
        <button
          data-rooms={1}
          className={`nums ${numRooms == 1 && "buttonClick"}`}
        >
          1
        </button>
        <button
          data-rooms={2}
          className={`nums ${numRooms == 2 && "buttonClick"}`}
        >
          2
        </button>
        <button
          data-rooms={3}
          className={`nums ${numRooms == 3 && "buttonClick"}`}
        >
          3
        </button>
        <button
          data-rooms={4}
          className={`nums ${numRooms == 4 && "buttonClick"}`}
        >
          4 or +
        </button>
      </div>
    </div>
  );
};

export const BathroomFilters = () => {
  const [numBathRooms, setNumRooms] = React.useState(1);

  const toggleRooms = (event) => {
    if (event.target.tagName === "BUTTON") {
      setNumRooms(event.target.dataset.rooms);
    }
  };
  return (
    <div className="filter-type">
      <span className="title">Bathrooms</span>

      <Bathroom />
      <div
        className="filter-rooms"
        onKeyDown={toggleRooms}
        onClick={() => toggleRooms()}
      >
        <button
          data-rooms={1}
          className={`nums ${numBathRooms == 1 && "buttonClick"}`}
        >
          1
        </button>
        <button
          data-rooms={2}
          className={`nums ${numBathRooms == 2 && "buttonClick"}`}
        >
          2
        </button>
        <button
          data-rooms={3}
          className={`nums ${numBathRooms == 3 && "buttonClick"}`}
        >
          3 or +
        </button>
      </div>
    </div>
  );
};

export const PublicationDateFilter = () => {
  return (
    <div className="filter-type">
      <span className="title">Publication date</span>
      <br />
      <select name="publication-date" id="publication-date">
        <option selected="selected" value="last 48 hours">
          last 48 hours
        </option>
        <option value="last week">last week</option>
        <option value="last month">last month</option>
      </select>
    </div>
  );
};

export const EquipmentFilter = () => {
  return (
    <div className="filter-type">
      <span className="title">Equipment</span>
      <br />
      <select name="equipment" id="equipment">
        <option selected="selected" value="indifferent">
          Indifferent
        </option>

        <option value="furnished">Furnished</option>

        <option value="fully-fitted-kitchen">Fully fitted kitchen</option>
      </select>
    </div>
  );
};

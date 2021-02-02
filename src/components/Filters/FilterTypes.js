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
  return (
    <div className="filter-type">
      <span className="title">
        Bedrooms <Sofa></Sofa>
        <div className="filter-rooms">
          <button>0 (studio flat)</button>
          <button className="nums buttonClick">1</button>
          <button className="nums">2</button>
          <button className="nums">3</button>
          <button className="nums">4 or +</button>
        </div>
      </span>
    </div>
  );
};

export const BathroomFilters = () => {
  return (
    <div className="filter-type">
      <span className="title">
        Bathrooms <Bathroom></Bathroom>
        <div className="filter-rooms">
          <button className="nums buttonClick">1</button>
          <button className="nums">2</button>
          <button className="nums">3</button>
          <button className="nums">4 or +</button>
        </div>
      </span>
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

        <option value="indifferent">
          An option with many many many characters
        </option>
      </select>
    </div>
  );
};

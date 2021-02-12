import React from "react";
import InputSlider from "./InputSlider";
import "./AddProperty.scss";

const AddProperty = () => {
  return (
    // "condition": 0, // type: int , 0-> new homes, 1-> good condition , 2-> needs renovation

    <div class="addContainer">
      <div>
        <p className="title">type of house</p>
        <select name="type_house">
          <option selected="selected" value={1}>
            house
          </option>
          <option value={0}>duplex</option>
          <option value={2}>penthouse</option>
        </select>
      </div>
      <div>
        <p className="title">equipment</p>
        <select name="equipment">
          <option selected="selected" value={0}>
            Indifferent
          </option>
          <option value={1}>fully fitted kitchen</option>
          <option value={2}>furnished</option>
        </select>
      </div>

      <div>
        <p className="title">condition</p>
        <select name="equipment">
          <option selected="selected" value={0}>
            new home
          </option>
          <option value={0}>good condition</option>
          <option value={2}>needs renovation</option>
        </select>
      </div>
      <div style={{ maxWidth: "300px" }}>
        <p className="title">Area (square meters)</p>
        <InputSlider name={"area"}></InputSlider>
      </div>

      <div style={{ maxWidth: "300px" }}>
        <p className="title">Price ($)</p>
        <InputSlider name={"area"} min={10000} max={100000}></InputSlider>
      </div>

      <br />
      <div className="addNum">
        <p className="title">number of bathrooms</p>
        <select name="num_bathrooms">
          <option selected="selected" value={1}>
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4+</option>
        </select>
      </div>

      <div className="addNum">
        <p className="title">number of rooms</p>
        <select name="num_rooms">
          <option selected="selected" value={0}>
            0
          </option>
          <option selected="selected" value={1}>
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4+</option>
        </select>
      </div>

      <div className="checkWrapper">
        <div className="check">
          <span className="title">pets allowed</span>
          <input type="checkbox" name="pets" />
        </div>
        <div className="check">
          <span className="title">garden</span>
          <input type="checkbox" name="garden" />
        </div>
        <div className="check">
          <span className="title">swimming pool</span>
          <input type="checkbox" name="swimming_pool" />
        </div>
        <div className="check">
          <span className="title">lift</span>
          <input type="checkbox" name="lift" />
        </div>

        <div className="check">
          <span className="title">air condition</span>
          <input type="checkbox" name="air_condition" />
        </div>

        <div className="check">
          <span className="title">terrace</span>
          <input type="checkbox" name="terrace" />
        </div>
      </div>

      <div>
        <p className="title">title (optional)</p>
        <input name="title" type="text" />
      </div>
      <div>
        <p className="title">Description (optional)</p>
        <textarea
          rows={5}
          cols={50}
          placeHolder="description"
          type="textArea"
        ></textarea>
      </div>
    </div>
  );
};

<div className="check">
  <span className="title">lift</span>
  <input type="checkbox" name="lift" />
</div>;

export default AddProperty;

// "type": "home",     // type: enum  (home/office)
// "type_house":0, // type: int, -1-> not a house,  0 -> duplex, 1->house, 2->penthouse
// "area": 232, // type int ( m^²)
// "status": true,  // type: boolean .  true -> not sold, false-> sold ,
// "bought_by": 3423423, // type: int ( user_id).  if -1-> not bought by anyone
// "created_at": , // type: date ( timestamp)
// "updated_at": "", // type : date ( timestamp)
// "price": 99999993,  // type: int
// "images": [], // array of url's  // type: array
// "description": "asfasdfsfd",  // type:string
// "num_bathrooms": 2, // type: int
// "num_rooms": 3, // type: int
// "pets": true,  // type: bool
// "garden": false, // type:bool
// "swimming_pool":true, // type: bool
// "lift":true, // type: bool
// "condition": 0, // type: int , 0-> new homes, 1-> good condition , 2-> needs renovation
// "air_condition":false, // type: bool
// "terrace":false, // type: bool
// "contact": 32423422, // admin email
// "title": "The best one", // type: string
// "building_use" :  // type:integer, -1-> not an office,  0-> private, 1->co_working , 2-> security_system
// }

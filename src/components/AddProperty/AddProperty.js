import React from "react";
import InputSlider from "./InputSlider";
import "./AddProperty.scss";

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("visible-img-id").src = e.target.result;
      //document.getElementById("image-path").value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

const AddProperty = () => {
  return (
    <div className="addContainer">
      <div>
        <p className="title">Email contact</p>
        <input type="text" name="email" />
      </div>
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
        <InputSlider name={"price"} min={10000} max={100000}></InputSlider>
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
          placeholder="description"
          type="textArea"
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          onChange={() => {
            let img = document.getElementsByName("image")[0];
            readURL(img);
          }}
          className="custom-file-input-edit"
          name="image"
        ></input>
      </div>

      <div>
        <img
          id={"visible-img-id"}
          className="image-post"
          alt="property-img"
        ></img>
      </div>
    </div>
  );
};

export default AddProperty;

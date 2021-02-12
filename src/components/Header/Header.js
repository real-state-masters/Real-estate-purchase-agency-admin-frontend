import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsFillBellFill, BsHouseDoor } from "react-icons/bs";
import { RiDashboardFill, RiArrowDropDownFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BiGlasses } from "react-icons/bi";
import getProperties from "../../services/getProperties";
import { URI, getToken } from "../../utils/constants";

import "./Header.scss";

const Header = ({
  connected,
  addProperties,
  changeLoginStatus,
  showAllProperties,
}) => {
  const [keyword, setKeyword] = useState("");

  const getAllProperties = () => {
    getProperties(URI, getToken()).then((res) => showAllProperties(res));
  };

  const logOut = () => {
    changeLoginStatus("false");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(keyword);
    getProperties(`${URI}/location/${keyword}`, getToken()).then((res) =>
      addProperties(res.data)
    );
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  if (connected === "false") {
    return <Redirect to="/sign-in" />;
  }

  return (
    <div className="header-container">
      <div>
        <div className="sidenav">
          <div>
            <BiGlasses />
            <RiDashboardFill />
            <BsHouseDoor />
            <FiSettings />
          </div>
        </div>
      </div>
      <form className="search-container" onSubmit={handleSubmit}>
        <div onClick={getAllProperties}>
          <span>All</span>
        </div>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          name="searchBox"
          placeholder="Search"
        />
        <GiMagnifyingGlass />
      </form>
      <div className="login-issues-container">
        <div className="notification-icon-container">
          <BsFillBellFill />
          <span>6</span>
        </div>
        <div className="photo-login-container">
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <div>
          <span>Mary J</span>
          <RiArrowDropDownFill />
        </div>
        <div className="login-out-container">
          <p onClick={logOut}>Log out</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connected: state.login.connected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllProperties: (value) =>
      dispatch({
        type: "GET_ALL_PROPERTIES",
        payload: { properties: value },
      }),

    addProperties: (value) =>
      dispatch({
        type: "ADD_PROPERTIES",
        payload: { properties: value },
      }),

    changeLoginStatus: (value) =>
      dispatch({
        type: "CHANGE_LOGIN_STATUS",
        payload: value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

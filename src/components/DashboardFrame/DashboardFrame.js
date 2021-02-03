import React, { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiGlasses } from "react-icons/bi";

import "./DashboardFrame.scss";

const DashboardFrame = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(keyword);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
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
          <input
            onChange={handleChange}
            type="text"
            value={keyword}
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
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardFrame;

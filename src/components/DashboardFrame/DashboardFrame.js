import React from 'react';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {BsFillBellFill} from 'react-icons/bs';
import {RiArrowDropDownFill} from 'react-icons/ri';
import {RiDashboardFill} from 'react-icons/ri';
import {BsHouseDoor} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiGlasses} from 'react-icons/bi';


import './DashboardFrame.scss';


const DashboardFrame = ({ children }) => {
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
                <div className="search-container">
                    <input type="text" placeholder="Search"/>
                    <GiMagnifyingGlass />
                </div>
                <div className="login-issues-container">
                    <div className="notification-icon-container">
                        <BsFillBellFill />
                        <span>6</span>
                    </div>
                    <div className="photo-login-container">
                        <figure>
                            <img src="" alt=""/>
                        </figure>
                    </div>
                    <div>
                        <span>Mary J</span>
                        <RiArrowDropDownFill />
                    </div>
                </div>
            </div>
            <main>
                { children }
            </main>
        </div>

    )
}

export default DashboardFrame
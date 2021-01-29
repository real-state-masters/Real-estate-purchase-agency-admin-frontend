import React from 'react';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {BsFillBellFill} from 'react-icons/bs';
import {RiArrowDropDownFill} from 'react-icons/ri';

import './Login.scss';


const Login = () => {
    return (
        <div className="header-container">
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

    )
}

export default Login
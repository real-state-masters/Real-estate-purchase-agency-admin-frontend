import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import {GiMagnifyingGlass} from 'react-icons/gi';
import {BsFillBellFill} from 'react-icons/bs';
import {RiArrowDropDownFill} from 'react-icons/ri';
import {RiDashboardFill} from 'react-icons/ri';
import {BsHouseDoor} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiGlasses} from 'react-icons/bi';

import './Header.scss'

const Header = ({connected, addProperties, changeLoginStatus}) => {
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token');
        console.log(token);
        fetch('https://real-state-admin.herokuapp.com/api/properties', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(r => r.json())
        .then(data => addProperties(data))
    }, [])

    const logOut = () => {
        changeLoginStatus("false")
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(keyword)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    if (connected === "false") {
        return <Redirect to='/sign-in' />;
    }


    return(
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
                        <input onChange={handleChange} type="text" value={keyword} name="searchBox" placeholder="Search"/>
                        <GiMagnifyingGlass />
                    </form>
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
                        <div className="login-out-container">
                            <p onClick={logOut}>Login out</p>
                        </div>
                    </div>
                </div>
    )
}

const mapStateToProps = state => {
    return {
        connected: state.login.connected
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        addProperties: value => (
            dispatch({
            type: 'ADD_PROPERTIES',
            payload: {properties: value}
        })),
        changeLoginStatus: value => (
            dispatch({
            type: 'CHANGE_LOGIN_STATUS',
            payload: value
        }))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
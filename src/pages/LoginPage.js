import React from 'react'

import NavBarLogin from '../components/NavBarLogin/NavBarLogin'
import Login from '../components/Login/Login';

import './Login.scss'

const LoginPage = () => {
    return (
        <div className="outer">
            <div className="inner">
                <NavBarLogin />
                <Login />
            </div>
        </div>


    )
}

export default LoginPage

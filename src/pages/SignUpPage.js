import React from 'react'

import NavBarLogin from '../components/NavBarLogin/NavBarLogin'
import SignUp from '../components/SignUp/SignUp';

import './Login.scss'

const SignUpPage = () => {
    return (
        <div className="outer">
            <div className="inner">
                <NavBarLogin />
                <SignUp />
            </div>
        </div>

    )
}

export default SignUpPage
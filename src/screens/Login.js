import React from 'react'
import Header from '../components/Header'
import './Login.css'
import logo from '../assets/rnsit_logo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Header />
            <div id='login_wrap'>
                <div id='login'>
                    <div id='login_top'>
                        <img src={logo} alt='rnsit' />
                        <span>Login</span>
                    </div>
                    <div id='login_bottom'>
                        <input id='login_email' type='email' placeholder='example@rnsit.ac.in' />
                        <input id='login_password' type='password' placeholder='password' />
                        <button id='login_btn'>Continue</button>
                    </div>
                    <Link id='forgot_password' to='/forgot-password'>forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
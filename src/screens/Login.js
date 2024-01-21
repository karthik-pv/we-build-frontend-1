import React, { useState } from 'react'
import Header from '../components/Header'
import './Login.css'
import logo from '../assets/rnsit_logo.svg'
import { Link } from 'react-router-dom'
import useApiRequest from '../hooks/useApiRequest'
import { STUDENT_LOGIN } from '../api/student'

const Login = () => {

    const [usn, setUsn] = useState('')
    const [password, setPassword] = useState('')

    const { fetch, data, error, loading } = useApiRequest({
        method: 'post',
        url: STUDENT_LOGIN,
        data: {
            usn,
            password
        }
    })

    console.log(data, loading, error)

    const handleLogin = (e) => {
        e.preventDefault()
        fetch()
    }

    return (
        <div>
            <Header />
            <div id='login_wrap'>
                <div id='login'>
                    <div id='login_top'>
                        <img src={logo} alt='rnsit' />
                        <span>Login</span>
                    </div>
                    <form id='login_bottom' onSubmit={handleLogin}>
                        <input id='login_usn' type='text' placeholder='1RN22CS170' value={usn} onChange={(e) => setUsn(e.target.value)} required />
                        <input id='login_password' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button id='login_btn' >Continue</button>
                    </form>
                    <Link id='forgot_password' to='/forgot-password'>forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
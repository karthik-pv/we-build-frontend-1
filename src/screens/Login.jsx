import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import logo from '../assets/rnsit_logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import useApiRequest from '../hooks/useApiRequest'
import { STUDENT_LOGIN } from '../api/student'
import toast from 'react-hot-toast'
import AuthContext from '../context/AuthContext'
import { RiLoader4Line } from "react-icons/ri"

const Login = () => {

    const navigate = useNavigate()

    const { setAuthToken } = useContext(AuthContext)

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

    const handleLogin = async (e) => {
        e.preventDefault()
        await fetch()
    }

    useEffect(() => {
        if (error) {
            toast.error(error?.response?.data?.message)
        }
    }, [error])

    useEffect(() => {
        if (data) {
            setAuthToken(data?.token)
            sessionStorage.setItem('AuthToken', data?.token)
            toast.success('Logged in successfully.')
            navigate('/')
        }
    }, [data])

    return (
        <div className='p-2'>
            <span className='text-black font-extrabold text-4xl'>College Test Portal</span>
            <div className='flex flex-col justify-center items-center mt-24'>
                <div className='bg-white shadow rounded-xl flex flex-col p-5 gap-10'>
                    <div className='flex items-center font-extrabold text-xl text-black'>
                        <img src={logo} alt='rnsit' className='w-32' />
                        <span>Login</span>
                    </div>
                    <form className='flex flex-col justify-center items-center font-extrabold min-w-80 gap-5' onSubmit={handleLogin}>
                        <input className='w-full bg-slate-50 outline-none p-2 rounded-lg border border-slate-500' type='text' placeholder='1RN22CS170' value={usn} onChange={(e) => setUsn(e.target.value)} required />
                        <input className='w-full bg-slate-50 outline-none p-2 rounded-lg border border-slate-500' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button className='bg-blue-900 text-white shadow w-full py-2 rounded-lg border border-slate-500 flex items-center justify-center' >
                            {
                                loading ?
                                    <RiLoader4Line className='font-extrabold animate-spin' size={25} />
                                    :
                                    <span>Login</span>
                            }
                        </button>
                    </form>
                    <Link id='forgot_password' to='/forgot-password'>forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
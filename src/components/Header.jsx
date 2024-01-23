import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go"
import AuthContext from '../context/AuthContext'

const Header = () => {

    const navigate = useNavigate()

    const { setAuthToken } = useContext(AuthContext)

    const handleLogout = () => {
        setAuthToken(null)
        navigate('/login')
    }

    return (
        <div className='flex flex-row justify-between items-center p-2'>
            <span className='text-black font-extrabold text-4xl'>College Test Portal</span>
            <div>
                <ul className='flex gap-10 font-extrabold text-base'>
                    <li>
                        <Link to='/'>Me</Link>
                    </li>
                    <li>
                        <Link to='/tests'>Tests</Link>
                    </li>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>
                    <li>
                        <Link to='/ask'>Ask</Link>
                    </li>
                </ul>
            </div>
            <button className='flex items-center gap-1 text-red-600 font-extrabold' onClick={handleLogout}>
                logout<GoArrowRight />
            </button>
        </div>
    )
}

export default Header
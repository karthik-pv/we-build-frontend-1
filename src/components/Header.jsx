import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go"

const Header = () => {
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
            <button className='flex items-center gap-1 text-red-600 font-extrabold'>
                logout<GoArrowRight />
            </button>
        </div>
    )
}

export default Header
import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    return (
        <div id='header'>
            <span id='header_title'>College Test Portal</span>
            <div id='header_navigation'>
                <ul id='header_navigation_list'>
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
            <button id='logout_btn'>Log out</button>
        </div>
    )
}

export default Header
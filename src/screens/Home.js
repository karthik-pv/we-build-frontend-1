import React from 'react'
import Header from '../components/Header'
import './Home.css'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div id='home'>
            <Header />
            <div id='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home
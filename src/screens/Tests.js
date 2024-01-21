import React from 'react'
import './Tests.css'
import TestCard from '../components/TestCard'
import Header from '../components/Header'

const Tests = () => {
    return (
        <>
            <Header />
            <div id='tests'>
                <div id='tests_header'>
                    <span>#Tests</span>
                    <input id='test_search' type='text' placeholder='search' />
                </div>
                <div id='tests_container'>
                    <TestCard />
                    <TestCard />
                </div>
            </div>
        </>
    )
}

export default Tests
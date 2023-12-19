import React from 'react'
import './Tests.css'
import TestCard from '../components/TestCard'

const Tests = () => {
    return (
        <div>
            <div id='tests_header'>
                <span>#Tests</span>
                <input id='test_search' type='text' placeholder='search'/>
            </div>
            <div id='tests_container'>
                <TestCard />
                <TestCard />
            </div>
        </div>
    )
}

export default Tests
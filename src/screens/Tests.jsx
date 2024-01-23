import React from 'react'
import TestCard from '../components/TestCard'
import Header from '../components/Header'

const Tests = () => {
    return (
        <>
            <Header />
            <div className='p-10'>
                <div className='flex justify-between items-center'>
                    <span className='text-black font-extrabold text-3xl'>#Tests</span>
                    <input className='outline-none shadow rounded-lg p-2 w-80' type='text' placeholder='search' />
                </div>
                <div className='pt-10'>
                    <TestCard />
                    <TestCard />
                </div>
            </div>
        </>
    )
}

export default Tests
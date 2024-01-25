import React, { useContext, useEffect } from 'react'
import TestCard from '../components/TestCard'
import Header from '../components/Header'
import useApiRequest from '../hooks/useApiRequest'
import AuthContext from '../context/AuthContext'
import { TEST_GET } from '../api/test'

const Tests = () => {

    const { authToken } = useContext(AuthContext)

    const { fetch, data, error, loading } = useApiRequest({
        method: 'get',
        url: TEST_GET,
        headers: {
            token: authToken
        },
        body: {}
    })

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Header />
            <div className='p-10'>
                <div className='flex justify-between items-center'>
                    <span className='text-black font-extrabold text-3xl'>#Tests</span>
                    <input className='outline-none shadow rounded-lg p-2 w-80' type='text' placeholder='search' />
                </div>
                {
                    loading && <span className='text-black font-extrabold text-3xl'>Loading...</span>
                }
                {
                    error && <span>Somthing went wrong</span>
                }
                <div className='flex flex-wrap'>
                    <TestCard />
                    <TestCard />
                </div>
            </div >
        </>
    )
}

export default Tests
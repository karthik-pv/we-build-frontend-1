import React, { useContext, useEffect } from 'react'
import TestCard from '../components/TestCard'
import Header from '../components/Header'
import useApiRequest from '../hooks/useApiRequest'
import AuthContext from '../context/AuthContext'
import { TEST_GET } from '../api/test'
import { RiLoader4Line } from "react-icons/ri"

const Tests = () => {

    const { authToken } = useContext(AuthContext)

    const { fetch, data, error, loading } = useApiRequest({
        method: 'get',
        url: TEST_GET,
        headers: {
            token: authToken
        },
        data: {
            // not working...
        }
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
                <div>
                    {
                        loading ?
                            <div className='flex items-center justify-center mt-40'>
                                <RiLoader4Line className='font-extrabold animate-spin' size={25} />
                                <span className='text-black text-2xl'>Loading...</span>
                            </div>
                            :
                            error ?
                                <div className='flex items-center justify-center mt-40'>
                                    <span className='font-mono font-bold'>Error: {error?.response?.data?.message}</span>
                                </div>
                                :
                                data && <div className='flex flex-wrap'>
                                    {
                                        data?.map(test => {
                                            return <TestCard test={test} key={test?._id} />
                                        })
                                    }
                                </div>

                    }
                </div>
            </div >
        </>
    )
}

export default Tests
import React, { useContext, useEffect, useState } from 'react'
import TestCard from '../components/TestCard'
import Header from '../components/Header'
import AuthContext from '../context/AuthContext'
import { TEST_GET } from '../api/test'
import { RiLoader4Line } from "react-icons/ri"
import { SUBJECT_GET } from '../api/subject'
import axios from 'axios'

const Tests = () => {

    const { authToken } = useContext(AuthContext)

    const [tests, setTests] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTests = async () => {

        setLoading(true)

        try {

            const { data } = await axios.get(TEST_GET, {
                headers: {
                    token: authToken
                }
            })

            for (let test of data) {

                const { data } = await axios.get(SUBJECT_GET + `${test?.subject}`)

                test.subject = data

            }

            setTests(data)

        } catch (error) {

            setError(error)

        } finally {

            setLoading(false)

        }

    }

    useEffect(() => {

        fetchTests()

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
                                tests && <div className='flex flex-wrap'>
                                    {
                                        tests?.map(test => {
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
import React, { useContext, useEffect, useState } from 'react'
import { RiLoader4Line } from 'react-icons/ri'
import useApiRequest from '../hooks/useApiRequest'
import { TEST_START } from '../api/test'
import AuthContext from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router'
import toast from 'react-hot-toast'

const TestPrerequisite = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [passcode, setPasscode] = useState('')
    const { authToken } = useContext(AuthContext)

    const { fetch, data, loading, error } = useApiRequest({
        method: 'post',
        url: TEST_START + `/${id}`,
        headers: {
            token: authToken
        },
        data: {
            passKey: passcode
        }
    })

    const handleEnter = (e) => {
        e.preventDefault()
        fetch()
    }

    useEffect(() => {
        if (error) {
            toast.error(error?.response?.data?.message)
        }
    }, [error])

    useEffect(() => {
        if (data) {
            localStorage.setItem('Test', JSON.stringify(data))
            navigate('/tests/' + id)
        }
    }, [data])

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white shadow rounded-xl flex flex-col p-5 gap-10'>
                <div>
                    <span className='flex items-center font-extrabold text-xl text-black'>#Passcode</span>
                </div>
                <form className='flex flex-col justify-center items-center font-extrabold min-w-80 gap-5'>
                    <input className='w-full bg-slate-50 outline-none p-2 rounded-lg border border-slate-500' type='text' placeholder='123456' value={passcode} onChange={(e) => setPasscode(e.target.value)} required />
                    <button className='bg-blue-900 text-white shadow w-full py-2 rounded-lg border border-slate-500 flex items-center justify-center' onClick={handleEnter}>
                        {
                            loading ?
                                <RiLoader4Line className='font-extrabold animate-spin' size={25} />
                                :
                                <span>Enter</span>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TestPrerequisite
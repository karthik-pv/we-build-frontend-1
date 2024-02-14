import axios from 'axios'
import React, { useContext, useState } from 'react'
import { TEST_START } from '../api/test'
import AuthContext from '../context/AuthContext'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { RiLoader4Line } from "react-icons/ri"
import ModalContext from '../context/ModalContext'

const Passkey = ({ testId }) => {

    const navigate = useNavigate()

    const [passKey, setPassKey] = useState('')
    const [loading, setLoading] = useState(false)

    const [cookie, setCookie] = useCookies(['TestToken'])

    const { authToken } = useContext(AuthContext)
    const { close } = useContext(ModalContext)

    const startTest = async () => {

        setLoading(true)

        try {

            const test = await axios.post(TEST_START + `/${testId}`, { passKey }, {
                headers: {
                    token: authToken
                }
            })

            setCookie('TestToken', test.data?.token, { expires: new Date(test.data?.test?.endTime) })

            const questions = []

            for (let question of test.data?.test?.questions) {

                questions.push({ question, answer: [] })

            }

            localStorage.setItem('questions', JSON.stringify(questions))

            navigate('/tests/' + testId)

        } catch (error) {

            if (error.code === "ERR_NETWORK") {
                toast.error(error.message)
                return
            }

            toast.error(error?.response?.data?.message)

        } finally {

            setLoading(false)

        }

    }

    return (
        <div className='p-5 gap-5 flex flex-col'>
            <div className='flex justify-between items-center'>
                <span>Enter Passkey</span>
            </div>
            <form className='gap-5 flex flex-col'>
                <input className='w-full bg-slate-50 outline-none p-2 rounded-lg border border-slate-500' type='text' placeholder='123456' value={passKey} onChange={(e) => setPassKey(e.target.value)} required />
                <button className='bg-blue-900 text-white shadow w-full py-2 rounded-lg border border-slate-500 flex items-center justify-center' onClick={(e) => {
                    e.preventDefault()
                    startTest()
                    close()
                }}>
                    {
                        loading ?
                            <RiLoader4Line className='font-extrabold animate-spin' size={25} />
                            :
                            <span>Enter</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default Passkey
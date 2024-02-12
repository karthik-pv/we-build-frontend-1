import React, { useContext, useEffect, useState } from 'react'
import useApiRequest from '../hooks/useApiRequest'
import { SUBJECT_GET } from '../api/subject'
import ModalContext from '../context/ModalContext'
import Passkey from './Passkey'

const TestCard = ({ test }) => {

    const [passKey, setPassKey] = useState('')

    const { fetch, data, error, loading } = useApiRequest({
        method: 'get',
        url: SUBJECT_GET + `${test?.subject}`
    })

    useEffect(() => {
        fetch()
    }, [])

    const { setComponent, setShow } = useContext(ModalContext)

    return (
        <div className='bg-white flex flex-col gap-5 p-2 m-4 shadow rounded-lg'>
            <div className='flex flex-col'>
                {
                    loading && <span>loading...</span>
                }
                {
                    error ?
                        <span>Somthing went wrong [subject: {test?.subject}]</span>
                        :
                        <>
                            <span className='font-extrabold'>{data?.subjectName}</span>
                            <span className='font-extrabold'>{data?.subjectCode}</span>
                        </>
                }
            </div>
            <div className='flex justify-between items-end'>
                <table className='text-left'>
                    <tbody>
                        <tr>
                            <th>Starting Date:</th>
                            <td className='px-2'>{new Date(test?.startTime).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th>End Date:</th>
                            <td className='px-2'>{new Date(test?.endTime).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>

                <button className='bg-blue-900 text-white py-1 px-4 rounded font-bold' onClick={() => {
                    setComponent(<Passkey setPassKey={setPassKey} passKey={passKey} />)
                    setShow(true)
                }}>Start</button>

            </div>
        </div>
    )
}

export default TestCard
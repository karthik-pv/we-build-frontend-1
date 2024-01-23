import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import useApiRequest from '../hooks/useApiRequest'
import { STUDENT_INFO } from '../api/student'
import AuthContext from '../context/AuthContext'

const Dashboard = () => {

    const { authToken } = useContext(AuthContext)

    const { fetch, data, error, loading } = useApiRequest({
        method: 'get',
        url: STUDENT_INFO,
        headers: {
            token: authToken
        }
    })

    useEffect(() => {
        fetch()
    }, [])

    // TODO get subject details

    return (
        <>
            <Header />
            <div className='flex flex-col p-10 gap-10'>
                <div className='flex flex-col'>
                    <span className='text-black text-5xl font-extrabold'>Hi there,</span>
                    <span className='text-black text-2xl font-extrabold'>{data?.name}</span>
                </div>
                <div className='flex gap-10'>
                    <table className='bg-white text-left shadow rounded-lg'>
                        <tbody>
                            <tr>
                                <th className='p-2'>USN</th>
                                <td className='p-2'>{data?.usn}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Email</th>
                                <td className='p-2'>{data?.email}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Phone</th>
                                <td className='p-2'>{data?.phone}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Branch</th>
                                <td className='p-2'>{data?.branch}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Semister</th>
                                <td className='p-2'>{data?.sem}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Section</th>
                                <td className='p-2'>{data?.section}</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Subjects</th>
                                <td className='p-2'>
                                    <table>
                                        <tbody>
                                            {
                                                data?.subjects.map((subject, index) => {
                                                    return <tr key={index}>
                                                        <td className='py-1'>{subject}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id='me_details_graph'>
                        <span># Recent activity</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
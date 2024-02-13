import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { STUDENT_INFO } from '../api/student'
import AuthContext from '../context/AuthContext'
import { RiLoader4Line } from "react-icons/ri"
import axios from 'axios'
import { SUBJECT_FILTER } from '../api/subject'

const Dashboard = () => {

    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { authToken } = useContext(AuthContext)

    const fetchStudent = async () => {

        setLoading(true)

        try {

            const student = await axios.get(STUDENT_INFO, {
                headers: {
                    token: authToken
                }
            })

            const subjects = await axios.post(SUBJECT_FILTER, { _id: student.data.subjects })

            student.data.subjects = subjects.data

            setStudent(student.data)

        } catch (error) {

            setError(error)

        } finally {

            setLoading(false)

        }

    }

    useEffect(() => {

        fetchStudent()

    }, [])

    return (
        <>
            <Header />
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
                        <div className='flex flex-col p-10 gap-10'>
                            <div className='flex flex-col'>
                                <span className='text-black text-5xl font-extrabold'>Hi there,</span>
                                <span className='text-black text-2xl font-extrabold'>{student?.name}</span>
                            </div>
                            <div className='flex gap-10'>
                                <table className='bg-white text-left shadow rounded-lg'>
                                    <tbody>
                                        <tr>
                                            <th className='p-2'>USN</th>
                                            <td className='p-2'>{student?.usn}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Email</th>
                                            <td className='p-2'>{student?.email}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Phone</th>
                                            <td className='p-2'>{student?.phone}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Branch</th>
                                            <td className='p-2'>{student?.branch}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Semister</th>
                                            <td className='p-2'>{student?.sem}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Section</th>
                                            <td className='p-2'>{student?.section}</td>
                                        </tr>
                                        <tr>
                                            <th className='p-2'>Subjects</th>
                                            <td className='p-2'>
                                                <table>
                                                    <tbody>
                                                        {
                                                            student?.subjects?.map((subject, index) => {
                                                                return <tr key={index}>
                                                                    <td className='py-1'>{subject?.subjectCode}</td>
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
            }
        </>
    )
}

export default Dashboard
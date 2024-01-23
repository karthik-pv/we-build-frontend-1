import React, { useContext, useEffect } from 'react'
import './Me.css'
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

    console.log(data, error, loading)

    return (
        <>
            <Header />
            <div id='me'>
                <div id='me_header'>
                    <span id='me_header_greeting'>Hi there,</span>
                    <span id='me_header_name'>{data?.name}</span>
                </div>
                <div id='me_details'>
                    <table id='me_details_table'>
                        <tbody>
                            <tr>
                                <th>USN</th>
                                <td>{data?.usn}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{data?.email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{data?.phone}</td>
                            </tr>
                            <tr>
                                <th>Branch</th>
                                <td>{data?.branch}</td>
                            </tr>
                            <tr>
                                <th>Semister</th>
                                <td>{data?.sem}</td>
                            </tr>
                            <tr>
                                <th>Section</th>
                                <td>{data?.section}</td>
                            </tr>
                            {/* subjects */}
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
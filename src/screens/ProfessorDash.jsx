import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ProfessorDash = () => {
    return(
        <>
            <Header />
            <div className='flex flex-col p-10 gap-10'>
                <div className='flex flex-row text-center items-center'>
                    <span className='text-black text-5xl font-extrabold'>Hi there,</span>
                    <span className='text-black text-5xl font-extrabold'>Jojo</span>
                </div>            
                <div className='flex gap-10 items-center flex-col'>
                    <table className='bg-white text-left shadow rounded-lg text-center table-fixed w-90%'>
                        <tbody>
                            <tr>
                                <th className='p-2 w-30%'>Name</th>
                                <td className='p-2 w-30%'>Jojo</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Email</th>
                                <td className='p-2'>Jojo@gmail.com</td>
                            </tr>
                            <tr>
                                <th className='p-2'>Subjects</th>
                                <td className='p-2'>DSA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex-col'>
                    <div>
                        <table className='w-full text-center'>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>
                                    <div id='me_details_graph'>
                                        <span># Recent activity</span>
                                    </div>
                                    </td>
                                    <td className='py-1'><Link>Create Test</Link></td>
                                </tr>
                                <tr>
                                    <td className='py-1'><Link>All Tests</Link></td>
                                </tr>
                                <tr>
                                    <td className='py-1'><Link>Test Results</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorDash;
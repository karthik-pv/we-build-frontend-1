import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const History = () => {
    return (
        <>
            <Header />
            <div className='p-10'>
                <div className='flex justify-between items-center'>
                    <span className='text-black font-extrabold text-3xl'>#Attempted Test's</span>
                    <input className='outline-none shadow rounded-lg p-2 w-80' type='text' placeholder='search' />
                </div>
                <div className='flex justify-center'>
                    <table className='text-left bg-white mt-5 w-full'>
                        <tbody>
                            <tr>
                                <th className='p-2 border-2'>
                                    #
                                </th>
                                <th className='p-2 border-2'>
                                    Date
                                </th>
                                <th className='p-2 border-2'>
                                    Title
                                </th>
                                <th className='p-2 border-2'>
                                    Subject
                                </th>
                                <th className='p-2 border-2'>
                                    Marks Scored
                                </th>
                                <th className='p-2 border-2'>
                                    Total Marks
                                </th>
                            </tr>
                            <tr>
                                <td className='p-2 border-2 underline hover:text-blue-600'>
                                    <Link>786587gb769b578nb465</Link>
                                </td>
                                <td className='p-2 border-2'>
                                    03-12-2023
                                </td>
                                <td className='p-2 border-2'>
                                    IA-1
                                </td>
                                <td className='p-2 border-2'>
                                    BIDTK108/208
                                </td>
                                <td className='p-2 border-2'>
                                    22
                                </td>
                                <td className='p-2 border-2'>
                                    30
                                </td>
                            </tr>
                            <tr>
                                <td className='p-2 border-2 underline hover:text-blue-600'>
                                    <Link>786587gb769b578nb465</Link>
                                </td>
                                <td className='p-2 border-2'>
                                    03-12-2023
                                </td>
                                <td className='p-2 border-2'>
                                    IA-1
                                </td>
                                <td className='p-2 border-2'>
                                    BIDTK108/208
                                </td>
                                <td className='p-2 border-2'>
                                    22
                                </td>
                                <td className='p-2 border-2'>
                                    30
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default History
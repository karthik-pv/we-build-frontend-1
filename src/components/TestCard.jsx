import React from 'react'

const TestCard = () => {
    return (
        <div className='bg-white flex flex-col gap-5 p-2 m-4 shadow rounded-lg w-80'>
            <div className='flex flex-col'>
                <span className='font-extrabold'>#6389h231r9bn8t6nbr</span>
                <span className='font-extrabold'>Principles Of Programming</span>
                <span className='font-extrabold'>BPOP203</span>
            </div>
            <div className='flex justify-between items-end'>
                <table className='text-left'>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <td className='px-2'>23 11 2023</td>
                        </tr>
                        <tr>
                            <th>Start</th>
                            <td className='px-2'>11:30</td>
                        </tr>
                        <tr>
                            <th>End</th>
                            <td className='px-2'>12:30</td>
                        </tr>
                    </tbody>
                </table>
                <button className='bg-blue-900 text-white py-1 px-4 rounded font-bold'>Start</button>
            </div>
        </div>
    )
}

export default TestCard
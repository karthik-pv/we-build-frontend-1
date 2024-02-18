import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom'

const Questions = () => {
    return(
        <>
        <Header />
        <div className='p-10'>
            <div className='flex justify-betweem items-center mt-5'>
                <div className='flex flex-col gap-5 w-90%'>
                    <span className='text-black font-extrabold text-3xl'>Question Bank</span>
                    <div className='flex justify-center'>
                        <table className='text-left bg-white w-full mt-5 table-fixed'>
                            <tbody>
                                <tr>
                                    <th className='p-2'>Number</th>
                                    <th className='p-2'>Subject</th>
                                    <th className='p-2 w-55%'>Question</th>
                                    <th className='p-2 w-10%'>Module</th>
                                    <th className='p-2 w-10%'>Difficulty</th>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2'>1</td>
                                    <td className='p-2 border-2'>dsa</td>
                                    <td className='p-2 border-2'><Link>moye moye</Link></td>
                                    <td className='p-2 border-2'>1</td>
                                    <td className='p-2 border-2'>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Questions;
import React from 'react'
import Question from '../components/Question'

const Test = () => {
    return (
        <div className='p-5'>
            <div className='flex items-center justify-between font-extrabold text-2xl'>
                <span># BIDTK108/208</span>
                <span>30:10</span>
            </div>
            <div className='flex items-center justify-around mt-24 m-5 gap-10'>
                <div className='flex flex-col bg-white shadow rounded-md'>
                    <div>
                        <Question />
                    </div>
                    <div className='flex justify-between mx-10 mb-5'>
                        <button className='bg-blue-900 text-white py-1 px-5 rounded'>Back</button>
                        <button className='bg-blue-900 text-white py-1 px-5 rounded'>Next</button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col bg-white shadow p-5 rounded-md w-64 gap-6'>
                        <div>
                            <span className='text-lg font-bold'># Test Overview</span>
                        </div>
                        <div className='flex flex-wrap'>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                            <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2'>1</button>
                        </div>
                        <button className='bg-blue-900 text-white rounded py-1'>Finish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
import React from 'react';
import Header from '../components/Header';

const Question = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center mt-5'>
                <div className='flex flex-col gap-5 w-1/2'>
                    <span className='text-black font-extrabold text-3xl'>Add/Edit/Delete a Question</span>
                    <textarea className='inline outline-none w-200 h-52 p-1' placeholder='Enter Question here - ' />
                    <div className='flex flex-col items-center gap-2'>
                        <textarea className='outline-none w-96 h-15 p-0' placeholder='Option a'/>
                        <textarea className='outline-none w-96 h-15 p-0' placeholder='Option b'/>
                        <textarea className='outline-none w-96 h-15 p-0' placeholder='Option c'/>
                        <textarea className='outline-none w-96 h-15 p-0' placeholder='Option d'/>
                        <button className='rounded-full outline-none w-96 h-15 bg-gray-400 p-0'>Add Option</button>
                        <div className='flex flex-row'>
                            <button className='rounded-full border-2 w-20 h-10 m-2 bg-blue-900'>Add</button>
                            <button className='rounded-full border-2 w-20 h-10 m-2 bg-blue-900'>Edit</button>
                            <button className='rounded-full border-2 w-20 h-10 m-2 bg-blue-900'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;
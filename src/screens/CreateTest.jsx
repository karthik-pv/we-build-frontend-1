import React from 'react';
import Header from '../components/Header';

const CreateTest = () => {
    return(
        <div>
            <Header />
            <div className='flex justify-center mt-5'>
                <div className='flex flex-col gap-5 w-1/2'>
                    <span className='text-black font-extrabold text-3xl text-center'>Create Test</span>
                        <span className='text-black font-bold text-xl'>Choose Subject - </span>
                        <div className='w-50% text-center'>
                            <select name="subject" className='text-center'>
                                <option selected>~Select~</option>
                                <option>DSA</option>
                                <option>CSE</option>      
                            </select>
                        </div>
                        <span className='text-black font-bold text-xl'>Choose Modules - </span>
                        <div className='w-50% text-center'>
                            <label>Module 1 - </label>
                            <input type="checkbox"></input><br></br>
                            <label>Module 2 - </label>
                            <input type="checkbox"></input><br></br>
                            <label>Module 3 - </label>
                            <input type="checkbox"></input><br></br>
                            <label>Module 4 - </label>
                            <input type="checkbox"></input><br></br>
                            <label>Module 5 - </label>
                            <input type="checkbox"></input><br></br>
                        </div>
                        <span className='text-black font-bold text-xl'>Choose Type of Test Generation - </span>
                        <div className='w-50% text-center'>
                            <select name="subject" className='text-center'>
                                <option selected>~Select~</option>
                                <option>Automatic</option>
                                <option>Manual</option>
                                <option>Semi Automatic</option>
                            </select>
                        </div>
                        <span className='text-black font-bold text-xl'>Choose Difficulty - </span>
                        <div className='w-50% text-center'>
                            <select name="subject" className='text-center'>
                                <option selected>~Select~</option>
                                <option>Easy</option>
                                <option>Medium</option>      
                                <option>Hard</option>
                            </select>
                        </div>
                        <span className='text-black font-bold text-xl'>Select Semester - </span>
                        <div className='w-50% text-center'>
                            <select name="subject" className='text-center'>
                                <option selected>~Select~</option>
                                <option>I</option>
                                <option>II</option>      
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                                <option>VI</option>
                                <option>VII</option>
                                <option>VIII</option>
                            </select>
                        </div>
                        <span className='text-black font-bold text-xl'>Select Class - </span>
                        <div className='w-50% text-center'>
                            <label>A - </label>
                            <input type="checkbox"></input><br></br>
                            <label>B - </label>
                            <input type="checkbox"></input><br></br>
                            <label>C - </label>
                            <input type="checkbox"></input><br></br>
                        </div>
                        <span className='text-black font-bold text-xl'>Begin Date and Time - </span>
                        <div className='text-center'>
                            <input type="datetime-local"></input>
                        </div>
                        <span className='text-black font-bold text-xl'>End Date and Time - </span>
                        <div className='text-center'>
                            <input type="datetime-local"></input>
                        </div>
                        <span className='text-black font-bold text-xl'>Create Passkey - </span>
                        <div className='text-center'>
                            <textarea className='h-7 w-30 text-center' placeholder='*** ***' />
                        </div>
                        <span className='text-black font-bold text-xl text-center'>Create Test - </span>
                        <div className='text-center'>
                            <button className='h-10 w-50 bg-blue-900 text-center rounded-full'>Create</button>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default CreateTest;
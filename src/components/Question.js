import React from 'react'
import './Question.css'

const Question = () => {
    return (
        <div id='test_question'>
            <div id='test_question_head'>
                <span># 1</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
            <ol id='test_question_options'>
                <li>
                    <div className='test_question_option'>
                        <input type='radio' name='question' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li>
                    <div className='test_question_option'>
                        <input type='radio' name='question' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li>
                    <div className='test_question_option'>
                        <input type='radio' name='question' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li>
                    <div className='test_question_option'>
                        <input type='radio' name='question' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Question
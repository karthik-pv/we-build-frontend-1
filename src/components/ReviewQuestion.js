import React from 'react'
import './ReviewQuestion.css'

const ReviewQuestion = () => {
    return (
        <div id='review_test_question'>
            <div id='review_test_question_head'>
                <div id='review_question_number'>
                    <span># 1</span>
                    <button id='review_question_level'>Easy</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
            <ol id='review_test_question_options'>
                <li id='review_question_correct'>
                    <div className='test_question_option'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li>
                    <div className='test_question_option'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li id='review_question_wrong'>
                    <div className='test_question_option'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
                <li>
                    <div className='test_question_option'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </li>
            </ol>
            <div id='marks_alloted'>
                <span>Marks Alloted: <span>1</span></span>
            </div>
        </div>
    )
}

export default ReviewQuestion
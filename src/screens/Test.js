import React from 'react'
import './Test.css'
import Question from '../components/Question'

const Test = () => {
    return (
        <div id='test'>
            <div id='test_header'>
                <span># BIDTK108/208</span>
                <span>30:10</span>
            </div>
            <div id='test_main'>
                <div id='test_left'>
                    <div id='test_left_question'>
                        <Question />
                    </div>
                    <div id='test_question_btns'>
                        <button>Back</button>
                        <button>Next</button>
                    </div>
                </div>
                <div id='test_right'>
                    <div id='test_overview'>
                        <div>
                            <span id='test_overview_heading'># Test Overview</span>
                        </div>
                        <div id='test_overview_btns'>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>10</button>
                            <button className='question_number'>5</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>14</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>19</button>
                            <button className='question_number'>7</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>24</button>
                            <button className='question_number'>1</button>
                            <button className='question_number'>1</button>
                        </div>
                        <button id='finish_test_btn'>Finish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
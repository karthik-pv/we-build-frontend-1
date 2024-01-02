import React from 'react'
import './Answer.css'
import Headrer from '../components/Header'
import ReviewQuestion from '../components/ReviewQuestion'
import { Link } from 'react-router-dom'

const Answer = () => {
    return (
        <div>
            <Headrer />
            <div id='answer'>
                <div id='answer_head'>
                    <span>#655cebb57d373734aaceb5a3</span>
                    <Link>download</Link>
                </div>
                <div id='answer_main'>
                    <div>
                        <div id='report_card'>
                            <div id='marks'>
                                <div>
                                    <span>25</span>
                                    <span>/30</span>
                                </div>
                            </div>
                            <div>
                                <table id='report_card_table'>
                                    <tbody>
                                        <tr>
                                            <th>Percentile</th>
                                            <td>83.56%</td>
                                        </tr>
                                        <tr>
                                            <th>🙂</th>
                                        </tr>
                                        <tr>
                                            <th>Good</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id='qna'>
                        <ReviewQuestion />
                        <ReviewQuestion />
                        <ReviewQuestion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Answer
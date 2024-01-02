import React from 'react'
import './TestCard.css'

const TestCard = () => {
    return (
        <div id='test_card'>
            <div id='test_card_top'>
                <span id='test_card_top_sub_name'>Principles Of Programming</span>
                <span id='test_card_top_sub_code'>BPOP203</span>
                <span id='test_card_top_sub_id'>#6389</span>
            </div>
            <div id='test_card_bottom'>
                <table id='test_details'>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <td>23 11 2023</td>
                        </tr>
                        <tr>
                            <th>Start</th>
                            <td>11:30</td>
                        </tr>
                        <tr>
                            <th>End</th>
                            <td>12:30</td>
                        </tr>
                    </tbody>
                </table>
                <button id='test_card_start_btn'>Start</button>
            </div>
        </div>
    )
}

export default TestCard
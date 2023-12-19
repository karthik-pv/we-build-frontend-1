import React from 'react'
import './History.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const History = () => {
    return (
        <div>
            <Header />
            <div id='history'>
                <div id='history_head'>
                    <span>#Attempted Test's</span>
                    <input id='history_search' type='text' placeholder='search' />
                </div>
                <div id='history_main'>
                    <table id='history_table'>
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Subject
                            </th>
                            <th>
                                Professor
                            </th>
                            <th>
                                Total Marks
                            </th>
                            <th>
                                Marks Scored
                            </th>
                            <th>
                                Reaction
                            </th>
                            <th>
                                Just Click
                            </th>
                        </tr>
                        <tr>
                            <td>
                                03-12-2023
                            </td>
                            <td>
                                IA-1
                            </td>
                            <td>
                                BIDTK108/208
                            </td>
                            <td>
                                Bhavani Shankar
                            </td>
                            <td>
                                30
                            </td>
                            <td>
                                25
                            </td>
                            <td>
                                🙂
                            </td>
                            <td>
                                <Link>click</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                03-12-2023
                            </td>
                            <td>
                                IA-1
                            </td>
                            <td>
                                BIDTK108/208
                            </td>
                            <td>
                                Bhavani Shankar
                            </td>
                            <td>
                                30
                            </td>
                            <td>
                                25
                            </td>
                            <td>
                                🙂
                            </td>
                            <td>
                                <Link>click</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                03-12-2023
                            </td>
                            <td>
                                IA-1
                            </td>
                            <td>
                                BIDTK108/208
                            </td>
                            <td>
                                Bhavani Shankar
                            </td>
                            <td>
                                30
                            </td>
                            <td>
                                25
                            </td>
                            <td>
                                🙂
                            </td>
                            <td>
                                <Link>click</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                03-12-2023
                            </td>
                            <td>
                                IA-1
                            </td>
                            <td>
                                BIDTK108/208
                            </td>
                            <td>
                                Bhavani Shankar
                            </td>
                            <td>
                                30
                            </td>
                            <td>
                                25
                            </td>
                            <td>
                                🙂
                            </td>
                            <td>
                                <Link>click</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default History
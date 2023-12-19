import React from 'react'
import './Me.css'

const Dashboard = () => {
    return (
        <div id='me'>
            <div id='me_header'>
                <span id='me_header_greeting'>Hi there,</span>
                <span id='me_header_name'>Tisheel N Bashyam</span>
            </div>
            <div id='me_details'>
                <table id='me_details_table'>
                    <tr>
                        <th>USN</th>
                        <td>1RN22CS170</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>1rn22cs170.tisheelnbashyam@rnsit.ac.in</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>+91 8073279428</td>
                    </tr>
                    <tr>
                        <th>Branch</th>
                        <td>CSE</td>
                    </tr>
                    <tr>
                        <th>Semister</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>Section</th>
                        <td>C</td>
                    </tr>
                    <tr>
                        <th>Subjects</th>
                        <td>
                            BIDTK108/208, BIDTK108/208
                        </td>
                    </tr>
                </table>
                <div id='me_details_graph'>
                    <span># Recent activity</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
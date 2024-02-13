import React, { useEffect, useState } from 'react'
import TestContext from './TestContext'
import { useCookies } from 'react-cookie'

const TestContextProvider = ({ children }) => {

    const [{ Test, TestToken }, setCookie] = useCookies(['TestToken', 'Test'])

    const [test, setTest] = useState(Test)



    return (
        <TestContext.Provider value={{ test, setTest }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider
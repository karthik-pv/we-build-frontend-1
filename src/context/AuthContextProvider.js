import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthContextProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState(sessionStorage.getItem('AuthToken'))

    const navigate = useNavigate()

    const logout = () => {
        setAuthToken(null)
        sessionStorage.removeItem('AuthToken')
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
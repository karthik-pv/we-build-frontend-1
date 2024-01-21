import React from 'react'
import Login from './screens/Login'
import { Route, Routes } from 'react-router-dom'
import Tests from './screens/Tests'
import Test from './screens/Test'
import Me from './screens/Me'
import History from './screens/History'
import Answer from './screens/Answer'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const AuthToken = sessionStorage.getItem('AuthToken')

  return (
    <>
      <Routes>
        <Route path='/' element={<Me />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/tests/:id' element={<Test />} />
        <Route path='/history' element={<History />} />
        <Route path='/history/:id' element={<Answer />} />
      </Routes>
      <Toaster position='bottom-center' />
    </>
  )
}

export default App
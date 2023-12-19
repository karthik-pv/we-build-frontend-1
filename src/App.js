import React from 'react'
import Login from './screens/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Tests from './screens/Tests'
import Test from './screens/Test'
import Me from './screens/Me'
import History from './screens/History'
import Answer from './screens/Answer'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<Me />} />
        <Route path='/tests' element={<Tests />} />
      </Route>
      <Route path='/tests/:id' element={<Test />} />
      <Route path='/login' element={<Login />} />
      <Route path='/history' element={<History />} />
      <Route path='/history/:id' element={<Answer />} />
    </Routes>
  )
}

export default App
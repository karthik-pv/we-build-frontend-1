import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContextProvider'
import ModalContextProvider from './context/ModalContextprovider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <ModalContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ModalContextProvider>
    </BrowserRouter>
  </>
)
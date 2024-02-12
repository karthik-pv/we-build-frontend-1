import { useState } from 'react'
import ModalContext from './ModalContext'

const ModalContextProvider = ({ children }) => {

    const [show, setShow] = useState(false)
    const [component, setComponent] = useState(null)

    return (
        <ModalContext.Provider value={{ component, show, setShow, setComponent }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider
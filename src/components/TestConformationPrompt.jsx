import React, { useContext } from "react"
import ModalContext from "../context/ModalContext"

const TestConformationPrompt = ({ submitAnswer }) => {

    const { close } = useContext(ModalContext)

    return (
        <div className='flex flex-col gap-5 items-center mt-5'>
            <div>
                <p>
                    Are you sure you want to <span className='font-bold'>submit</span> your test?
                </p>
                <p>
                    Once submitted, you will not be able to make any changes. Please <span className='font-bold'>review</span> your answers before confirming.
                </p>
            </div>
            <button className='bg-red-600 text-white rounded py-1 w-60' onClick={() => {
                submitAnswer()
                close()
            }}>
                Submit
            </button>
        </div>
    )
}

export default TestConformationPrompt
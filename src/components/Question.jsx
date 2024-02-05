import React from 'react'

const Question = ({ question }) => {
    return (
        <div>
            <div>
                <p>
                    {question?.question}
                </p>
            </div>
            <ol className='p-5'>
                {
                    question?.options.map((option, index) => {
                        return <li key={index}>
                            <div className='flex items-center gap-2 my-2'>
                                <input type='radio' name='question' />
                                <p>{option}</p>
                            </div>
                        </li>
                    })
                }
            </ol>
        </div>
    )
}

export default Question
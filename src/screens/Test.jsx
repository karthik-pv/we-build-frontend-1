import React, { useEffect, useState } from 'react'
import Question from '../components/Question'
import { useNavigate, useParams } from 'react-router'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { TEST_FINISH } from '../api/test'
import { RiLoader4Line } from 'react-icons/ri'

const Test = () => {

    const navigate = useNavigate()

    const [cookie, setCookie, removeCookie] = useCookies(['TestToken'])

    const questions = JSON.parse(localStorage.getItem('questions'))

    const [questionIndex, setQuestionIndex] = useState(0)
    const [answer, setAnswer] = useState(questions[questionIndex]?.answer)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const testToken = cookie.TestToken

        if (!testToken) {
            return navigate('/')
        }

    }, [])

    useEffect(() => {

        setAnswer(questions[questionIndex]?.answer)

    }, [questionIndex])

    const handleAnswer = (option) => {

        setAnswer([option])

        const questions = JSON.parse(localStorage.getItem('questions'))

        for (let q of questions) {

            if (q.question._id === questions[questionIndex]?.question._id) {

                q.answer = [option]

            }

        }

        localStorage.setItem('questions', JSON.stringify(questions))
    }

    const submitAnswer = async () => {

        setLoading(true)

        try {

            const submit = await axios.post(TEST_FINISH, { questions }, {
                headers: {
                    token: cookie.TestToken
                }
            })

            console.log(submit.data)

            localStorage.removeItem('questions')
            removeCookie('TestToken')

        } catch (error) {

            setError(error)
            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    return (
        <div className='p-5'>
            <div className='flex items-center justify-between font-extrabold text-2xl'>
                <span># BIDTK108/208</span>
                <span>30:10</span>
            </div>
            <div className='flex items-center justify-around mt-24 m-5 gap-10'>
                <div className='flex flex-col bg-white shadow rounded-md w-full'>
                    <div className='p-10'>
                        <span className='text-lg font-bold'># {questionIndex + 1}</span>
                        <Question question={questions[questionIndex]?.question} answer={answer} handleAnswer={handleAnswer} />
                    </div>
                    <div className='flex justify-between mx-10 mb-5'>
                        <button className='bg-blue-900 text-white py-1 px-5 rounded'
                            onClick={() => {
                                if (questionIndex > 0)
                                    setQuestionIndex(questionIndex - 1)
                            }}
                        >Back</button>
                        <button className='bg-blue-900 text-white py-1 px-5 rounded'
                            onClick={() => {
                                if (questionIndex < questions.length - 1)
                                    setQuestionIndex(questionIndex + 1)
                            }}
                        >Next</button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col bg-white shadow p-5 rounded-md w-64 gap-6'>
                        <div>
                            <span className='text-lg font-bold'># Test Overview</span>
                        </div>
                        <div className='flex flex-wrap'>
                            {
                                questions.map((question, index) => {
                                    return question?.answer.length === 0 ?
                                        <button className='rounded-full border-2 w-8 h-8 bg-white shadow m-2' key={index}
                                            onClick={() => setQuestionIndex(index)}
                                        >{index + 1}
                                        </button> :
                                        <button className='rounded-full border-2 w-8 h-8 bg-white border-blue-900 shadow m-2' key={index}
                                            onClick={() => setQuestionIndex(index)}
                                        >{index + 1}
                                        </button>
                                })
                            }
                        </div>
                        <button className='bg-blue-900 text-white rounded py-1' onClick={submitAnswer}>
                            {
                                loading ?
                                    <RiLoader4Line className='font-extrabold animate-spin' size={25} />
                                    :
                                    <span>Finish</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
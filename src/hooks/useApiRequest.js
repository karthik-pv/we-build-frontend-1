import axios from 'axios'
import { useState } from 'react'

const useApiRequest = (config) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetch = async () => {
        try {
            setLoading(true)
            const res = await axios(config)
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { fetch, loading, data, error }
}

export default useApiRequest
import axios from 'axios'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import AuthContext from '../context/AuthContext'

const useApiRequest = (config) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const { logout } = useContext(AuthContext)

    const fetch = async () => {
        try {
            setLoading(true)
            const res = await axios(config)
            setData(res.data)
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                toast.error(error.message)
                return
            }
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { fetch, loading, data, error }
}

export default useApiRequest
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://pokeapi.co/api/v2"

export default function useAxios(name) { //endpoint
    const [response, setReponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.get(`/pokemon/${name}`) //endpoint
            setReponse(RESPONSE.data)
        } catch {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(function() {
        getData()
    }, [])

    return { response, error, loading }
}
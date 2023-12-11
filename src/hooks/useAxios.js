import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(name) {
    const [response, setReponse] = useState(null)

    useEffect(function() {
        async function getPokemon() {
            const RESPONSE = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setReponse(RESPONSE.data)
          }
          getPokemon()
    }, [])

    return { response }
}
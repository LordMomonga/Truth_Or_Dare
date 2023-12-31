import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Cookies from 'js-cookie';


export const useLogin = () => {
    const [error, setError ] = useState(null)
    const [activ, setActiv] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (pseudo, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://truth-or-dare-9cpt.onrender.com/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},

            body: JSON.stringify({pseudo, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
           
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            setActiv(true)
        }
    }
    return{ login, isLoading, error, activ}
}

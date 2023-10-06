import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () => {
    const [error, setError ] = useState(null)
    const [activ, setActiv] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (pseudo, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://truth-or-dare-orcin.vercel.app/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},

            body: JSON.stringify({pseudo, email, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            //update des AuthContext
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            setActiv(true)
        }
    }
    return{ signup, isLoading, error, activ}
}

import {useState} from 'react';
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const [error ,setError] = useState(null)
    const [isLoading , setIsLoading] = useState(null) //for button
    const {dispatch} = useAuthContext()
    
    const login = async (email,password) =>{
        setIsLoading(true) //starting req
        setError(null) //resetting error to null for not showing it when plp rectify

        
        const response = await fetch('/api/blogapi/user/login' ,
        {
            method: 'POST',
       
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json, text/plain'
            },
            body: JSON.stringify({email,password})
        })

        // .then((response) => response.json())
        // .then((finalresponse)=>{console.log("hello")})

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //save user to local storeage 
            localStorage.setItem('user', JSON.stringify(json))

            //update the wuth context
            dispatch({type: "LOGIN" , payload: json})
            console.log("User Logged In!!!",json)
            setIsLoading(false)

        }
    }

    return {login,isLoading,error}
}
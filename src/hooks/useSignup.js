import {useState} from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    const [error ,setError] = useState(null)
    const [isLoading , setIsLoading] = useState(null) //for button
    const {dispatch} = useAuthContext()
    
    const signup = async(username,email,password) =>{
       
        setIsLoading(true) //starting req
        setError(null) //resetting error to null for not showing it when plp rectify

        
        const response = await fetch('/api/blogapi/user/signup' ,
        {
            method: "POST",
            body: JSON.stringify({username,email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
            
        }
        )

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //save user to local storeage 
            localStorage.setItem('user',JSON.stringify(json))

            //update the wuth context
            dispatch({type: "LOGIN" , payload:json})
            console.log("New User Added!!!",json)
            setIsLoading(false)

        }
    }

    return {signup,isLoading,error}
}
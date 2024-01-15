// import { useState } from "react"
import {useAuthContext} from './useAuthContext'

export const useLogout = () => {
    // const [user,setUser] = useState('')
    // const logout = () => {
    //         user = JSON.parse(localStorage.getItem('user'))
    //         if(user){
    //             //REMOVE USER FROM LOCAL STORAGE OF BROWSER
    //             localStorage.removeItem('user')
    //             setUser('')
    //             console.log("User logout!")
    //         }
    //         if(!user){
    //             console.log("User logout error!")
    //         }
    //     return {logout}
    //     }

    const {dispatch} = useAuthContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}



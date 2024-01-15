import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [error ,setError] = useState(null)
    // const [isLoading , setIsLoading] = useState(null) //for button
    const {error,isLoading,login} = useLogin()
    const handleSubmit = async (e) => {

        e.preventDefault()
        await login(email,password)

        // setIsLoading(true)
        // setError(null)
        // const user = {email, password}

        // const response = await fetch('/api/blogapi/user/login' ,
        // {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        // )
        // const json = await response.json()

        // if(!response){
        //     setIsLoading(false)
        //     setError(json.error)
        // }

        // if(response.ok){
        //     setEmail('')
        //     setPassword('')
        //     setError(null)
        //     //save user to local storeage 
        //     localStorage.setItem('user',JSON.stringify(json))
        //     console.log("User Logged In!!!",json)
        //     setIsLoading(false)
            

        // }

    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email</label>
            <input type = "email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label>Password</label>
            <input type = "password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled = {isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login
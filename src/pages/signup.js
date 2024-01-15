import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {error,isLoading,signup} = useSignup()
    // const [error ,setError] = useState(null)
    // const [isLoading , setIsLoading] = useState(null) //for button

    const handleSubmit = async (e) => {

        e.preventDefault()
        await signup(username,email,password)
        // setIsLoading(true)
        // setError(null)
        // const user = {username, email, password}
        // const response = await fetch('/api/blogapi/user/signup' ,
        // {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        // )
        // const json = await response.json()

        // if(!response.ok){
        //     setIsLoading(false)
        //     setError(json.error)
        // }

        // if(response.ok){
        //     setUsername('')
        //     setEmail('')
        //     setPassword('')
        //     setError(null)
        //     //save user to local storeage 
        //     localStorage.setItem('user',JSON.stringify(json))
        //     console.log("New User Added!!!",json)
        //     setIsLoading(false)

        // }

    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>Username</label>
            <input type = "text" onChange={(e) => setUsername(e.target.value)} value={username} />

            <label>Email</label>
            <input type = "email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label>Password</label>
            <input type = "password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled = {isLoading}>Signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;
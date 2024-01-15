import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthcon must be used inside an AuthConProvider")
    }

    return context
}


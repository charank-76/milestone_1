"use client"
import { createContext,
    useContext,useState,
 } from "react";

    const AuthContext = createContext();
    export const AuthProvider=({children})=>{
         const [cnfmpass,setcnfmpass ]= useState("");
         
        const [email,setEmail ]= useState("");
        const [password,setPassword] = useState("");
        const [remail,setRemail ]= useState("");
        const [rpassword,setRpassword] = useState("");
       const register = (email, password, cnfmpass) => {
            setEmail(email);
            setPassword(password);
            setcnfmpass(cnfmpass);
        }
        const login = (remail, rpassword) => {
            setRemail(remail);
            setRpassword(rpassword);
        }

        const logout = () => {
            setEmail("");
            setPassword("");
        }

        return(
            <AuthContext.Provider value={{email,password,remail,rpassword,register,login,logout}}>
                {children}
            </AuthContext.Provider>
        )
    }

    export const useAuth = () =>{ 
        return useContext(AuthContext);}
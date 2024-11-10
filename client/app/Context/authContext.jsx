'use client'
import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { createContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const authContext = createContext();


const AuthContextProvider = (props) => {
    const [loginStatus , setLoginStatus] = useState(false)
    const [user, setUser] = useState({})
    const Login = (user) => {
        axios.post('http://localhost:3001/api/auth/login', {
            email: user.email,
            password: user.password
        })
            .then(res => {
                localStorage.setItem("info", JSON.stringify(res.data))
                window.location.href = "/"
                setLoginStatus(true)
                toast.success("Login successfully")
            })
            .catch(err => {
                toast.error(err.response.data)
            })
    }
    const Logout = () => {
        localStorage.removeItem("info")
        setLoginStatus(false)
        toast.success("Logout successfully")
    }
    useEffect(() => {
        const info = localStorage.getItem("info")
        if (info) {
            setUser(JSON.parse(info))
            setLoginStatus(true)
        }
    }, [])
    return (
        <>        
            <ToastContainer />
            <authContext.Provider value={{
                Login , Logout ,  loginStatus , user
            }}>
                {props.children}
            </authContext.Provider>
        </>
  )
}

export default AuthContextProvider 
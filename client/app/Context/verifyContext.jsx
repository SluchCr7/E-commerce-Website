'use client'
import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { createContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const verifyContext = createContext();

export const VerifyContextProvider = ({ children }) => {

    const [verifyStatus, setVerifyStatus] = useState(false)
    const verify = async (id,token) => {
        axios.get(`http://localhost:3001/api/auth/${id}/verify/${token}`)
            .then(res => {
                setVerifyStatus(true)
                toast.success("Email Verified")
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    return (
        <verifyContext.Provider
            value={{ verifyStatus, setVerifyStatus, verify }}>
            {children}
        </verifyContext.Provider>
    )
}
'use client'
import { verifyContext } from '@/app/Context/verifyContext'
import React from 'react'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
const page = ({ params }) => {
    const {id, token} = params
    const {verifyStatus, setVerifyStatus, verify} = useContext(verifyContext)
    useEffect(() => {
        if (!verifyStatus) {
            verify(id , token)
        }
    })
    useEffect(() => {
        console.log(verifyStatus , id , token)
    } , [verifyStatus , id , token])
    const isVerified = verifyStatus
  return (
    <div className='p-10 w-full flex bg-ModeOne-primary dark:bg-ModeTwo-primary items-center flex-col gap-3'>
        <span className='text_headlineLeft text-2xl text-ModeOne-text font-bold tracking-[3px] dark:text-ModeTwo-text'>Sluch<span className='text-ModeOne-secondary dark:text-ModeTwo-third'>.</span></span>
        <span className='text-sm tracking-[2px] text-ModeOne-text dark:text-ModeTwo-text font-bold'>Verify Account and go to the login page and start Shopping and enjoy</span>
        {
        isVerified ? 
            <div className='flex items-center flex-col gap-3 my-5'>
                <span className='text-green-700 tracking-[2px] my-5 font-bold text-2xl'>Your Account Verified Successfully</span>
                <Link href={"/login"} className='bg-ModeOne-text flex items-center justify-center cursor-pointer dark:bg-ModeTwo-text text-ModeOne-text dark:text-ModeTwo-text py-3 px-4 w-[300px] text-base'>Login</Link>
            </div>
            :
            <span className='text-red-700 tracking-[2px] my-5 font-bold text-2xl'>Your Account Not Verified</span>
        }
    </div>
  )
}

export default page
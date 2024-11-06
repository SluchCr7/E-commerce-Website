'use client'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { authContext } from '@/app/Context/authContext'
const page = () => {
  const { Login } = useContext(authContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  return (
    <div className='flex items-center gap-3 bg-ModeOne-primary dark:bg-ModeTwo-primary p-10 flex-col'>
        <h1 className='text-ModeOne-text dark:text-ModeTwo-text font-bold text-3xl tracking-[2px]'>Sluch<span className='text-ModeOne-secondary dark:text-ModeTwo-secondary'>.</span></h1>
        <p className='text-ModeOne-text dark:text-ModeTwo-text'>Login and shopping new products and impresive collections</p>
        <form onSubmit={(e) => { e.preventDefault(); Login(user) }} action="" className='flex items-center gap-6 flex-col py-4'>
            <div className='relative'>
                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className='border-2 w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Email' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Email</label>
            </div>
            <div className='relative'>
                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" className='border-2 w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Password' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Password</label>
            </div>
            <div className='w-[400px] flex items-center justify-between'>
              <span className='text-sm text-ModeOne-text dark:text-ModeTwo-text'>Forget Your password</span>
              <Link href={"../SignUp"} className='text-sm text-ModeOne-secondary dark:text-ModeTwo-secondary'>Create Account</Link>
            </div>
            <button className='border-[1px] text-ModeOne-text dark:text-ModeTwo-text uppercase tracking-[3px] border-ModeOne-third dark:border-ModeTwo-third w-[400px] p-3 rounded-md'>Login</button>
        </form>
    </div>
  )
}

export default page
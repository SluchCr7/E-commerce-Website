'use client'
import axios from 'axios';
import React , {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
    const [email, setemail] = useState('')
    const handleForget = (e) => {
        e.preventDefault()
        if(email === '') toast.error('Email is required')
        else {
            axios.post('http://localhost:3001/api/password/reset', {email})
            .then(res => {
                toast.success(res.data)
            })
            .catch(err => {
                toast.error(err.response.data)
            })
        }
    }
return (
    <div className='flex items-center gap-3 bg-ModeOne-primary dark:bg-ModeTwo-primary p-10 flex-col'>
        <ToastContainer/>
        <h1 className='text-ModeOne-text dark:text-ModeTwo-text font-bold text-3xl tracking-[2px]'>Sluch<span className='text-ModeOne-secondary dark:text-ModeTwo-secondary'>.</span></h1>
        <p className='text-ModeOne-text dark:text-ModeTwo-text'>Login and shopping new products and impresive collections</p>
        <form onSubmit={(e)=> handleForget(e)} action="" className='flex items-center gap-6 flex-col py-4'>
            <div className='relative'>
                <input value={email} onChange={(e) => setemail(e.target.value )} type="email" className='border-2 w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Email' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Email</label>
            </div>
            <button className='border-[1px] text-ModeOne-text dark:text-ModeTwo-text uppercase tracking-[3px] border-ModeOne-third dark:border-ModeTwo-third w-[400px] p-3 rounded-md'>Reset</button>
        </form>
    </div>
  )
}

export default page
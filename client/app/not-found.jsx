import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='flex bg-ModeOne-primary gap-4 dark:bg-ModeTwo-primary items-center justify-center w-full flex-col p-10'>
        <span className='text-ModeOne-text dark:text-ModeTwo-text text-2xl tracking-[3px] font-bold'>Sluch<span className='text-ModeOne-secondary dark:text-ModeTwo-secondary'>.</span></span>
        <h1 className='text-4xl text-ModeOne-third dark:text-ModeTwo-third'>You requst a not Found Page (404) </h1>
        <p className='text-sm text-center mx-auto text-ModeOne-text dark:text-ModeTwo-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam doloremque doloribus sapiente tempora. Molestiae pariatur veritatis numquam labore, omnis quos officiis, nemo sequi, corporis quas unde. Ad molestiae facere amet?</p>
        <Link href={"/"} className='bg-ModeOne-text flex items-center justify-center cursor-pointer dark:bg-ModeTwo-text text-ModeOne-primary dark:text-ModeTwo-primary py-3 px-4 w-[300px] text-base'>Go Back To Home Page</Link>
    </div>
  )
}

export default NotFound
import React from 'react'
import { BsPinAngleFill } from "react-icons/bs";

const Ads = () => {
  return (
    <div className='bg-ModeOne-text relative mb-5 mt-[-30px] text-center flex items-center flex-col gap-5 dark:bg-ModeTwo-text p-5 rounded-lg w-[600px]'>
      <span className='text-ModeOne-secondary text-base font-bold uppercase tracking-[2px] dark:text-ModeTwo-secondary'>Now !! 40% off on all products</span>
      <p className='text-ModeOne-primary mx-auto tracking-[2px] dark:text-ModeTwo-primary w-[80%] text-sm'>You can get any product from our store From any of our branches around the world and we will deliver it to your door for free , No matter where you are in the world</p>
      <span className='absolute top-[0px] right-[-10px] text-xl text-ModeOne-secondary dark:text-ModeTwo-secondary'><BsPinAngleFill /></span>
    </div>
  )
}

export default Ads
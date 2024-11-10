import Image from 'next/image';
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Title from '@/app/Components/Title';
const page = () => {
  return (
    <div className='flex items-center flex-col gap-5 p-10 bg-ModeOne-primary dark:bg-ModeTwo-primary'>
      <Title text1={"Contact Us"} />
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
        <div className='flex w-[300px] items-center flex-col gap-5 border-[1px] border-ModeOne-text dark:border-ModeTwo-text p-6'>
          <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg'><BsTelephone /></span>
          <span className='tracking-[2px] text-ModeOne-text dark:text-ModeTwo-text'><span className='text-ModeOne-third dark:text-ModeTwo-third'>+20</span>1550662103</span>
        </div>
        <div className='flex w-[300px] items-center flex-col gap-5 border-[1px] border-ModeOne-text dark:border-ModeTwo-text p-6'>
          <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg'><MdOutlineEmail /></span>
          <span className='tracking-[2px] text-ModeOne-text dark:text-ModeTwo-text'>SluchCo.0@gmail.com</span>
        </div>
        <div className='flex w-[300px] items-center flex-col gap-5 border-[1px] border-ModeOne-text dark:border-ModeTwo-text p-6'>
          <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg'><CiLocationOn /></span>
          <span className='tracking-[2px] text-ModeOne-text dark:text-ModeTwo-text'>
            Cairo , Paris , Manchester
          </span>
        </div>
      </div>
    </div>
  )
}

export default page
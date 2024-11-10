'use client'
import React from 'react'
import motion from 'framer-motion'
import Image from 'next/image'
import Title from '@/app/Components/Title'
const page = () => {
  return (
    <>
      <div className='flex items-center bg-ModeOne-primary  dark:bg-ModeTwo-primary flex-col gap-7 w-full min-h-[70vh] p-10'>
        <Title text1={'About Us'} />
        <div className='flex items-center flex-col gap-3'>
          <span className='text-ModeOne-third dark:text-ModeTwo-third text-base'>History</span>
          <p className='text-sm text-center mx-auto text-ModeOne-text dark:text-ModeTwo-text w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti illum exercitationem quis! Alias delectus voluptatem officiis explicabo cupiditate omnis exercitationem vitae, facere tempora deleniti necessitatibus, velit asperiores pariatur adipisci voluptatum.</p>
        </div>
        <div className='flex items-center flex-col gap-3'>
          <span className='text-ModeOne-third dark:text-ModeTwo-third text-base'>Description</span>
          <p className='text-sm text-center mx-auto text-ModeOne-text dark:text-ModeTwo-text w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti illum exercitationem quis! Alias delectus voluptatem officiis explicabo cupiditate omnis exercitationem vitae, facere tempora deleniti necessitatibus, velit asperiores pariatur adipisci voluptatum.</p>
        </div>
        <div className='flex items-center flex-col gap-3'>
          <span className='text-ModeOne-third dark:text-ModeTwo-third text-base'>Our Mission</span>
          <p className='text-sm text-center mx-auto text-ModeOne-text dark:text-ModeTwo-text w-[70%]'>We are committed to bringing you products that not only meet your needs but also exceed your expectations. Our mission is to inspire confidence through style and quality, offering items that are designed to enhance your lifestyle and bring joy to everyday moments. From the latest trends to timeless pieces, our goal is to ensure you always find something that resonates with your style.</p>
        </div>
        <div className='flex items-center flex-col gap-3'>
          <span className='text-ModeOne-third dark:text-ModeTwo-third text-base'>Why Choice us</span>
          <div className='grid grid-cols-3 gap-3'>
            <div className='border-[1px] flex items-start flex-col gap-3 border-gray-400 p-3 rounded-md'>
              <span className='text-lg text-ModeOne-secondary dark:text-ModeTwo-secondary'>Quality & Authenticity</span>
              <p className='w-[90%] text-ModeOne-text dark:text-ModeTwo-text text-xs'>Every product in our store is sourced from trusted suppliers, ensuring that you receive items made with care, attention to detail, and durability in mind.</p>
            </div>
            <div className='border-[1px] flex items-start flex-col gap-3 border-gray-400 p-3 rounded-md'>
              <span className='text-lg text-ModeOne-secondary dark:text-ModeTwo-secondary'>Exceptional Customer Service</span>
              <p className='w-[90%] text-ModeOne-text dark:text-ModeTwo-text text-xs'>Our dedicated team is here to support you every step of the way, from finding the perfect product to answering questions and processing returns quickly and easily</p>
            </div>
            <div className='border-[1px] flex items-start flex-col gap-3 border-gray-400 p-3 rounded-md'>
              <span className='text-lg text-ModeOne-secondary dark:text-ModeTwo-secondary'>Fast & Reliable Shipping</span>
              <p className='w-[90%] text-ModeOne-text dark:text-ModeTwo-text text-xs'>We know how important it is for your purchases to reach you promptly, and we strive to provide efficient delivery on every order.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
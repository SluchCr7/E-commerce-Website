import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const dataOne = [
    { 
      title: "About",
      links : [
        "About Us",
        "Blog",
        "Careers",
        "Contact Us",
        "Press",
        "Privacy Policy",
        "Terms of Service",
      ]
    },
    {
      title: "Contact",
      links: [
        "Phone",
        "Email",
        "WhatsApp",
        "Skype",
      ]
    }
  ]
  const social = [
    {
      icon : <FaFacebook />,
      link : "https://www.facebook.com/"
    },
    {
      icon : <FaXTwitter />,
      link : "https://www.twitter.com/"
    },
    {
      icon : <FaInstagram />,
      link : "https://www.instagram.com/"
    },
    {
      icon : <FaThreads />,
      link : "https://www.threads.com/"
    },
    {
      icon: <FaYoutube />,
      link : "https://www.youtube.com/"
    }
  ]
  return (
    <div className='w-full bg-ModeOne-primary py-8 mt-8 px-5 dark:bg-ModeTwo-primary border-t-[1px] border-ModeOne-third dark:border-ModeTwo-third flex flex-col items-center'>
      <div className='flex items-center flex-col lg:flex-row lg:px-14 justify-between w-full gap-3'>
        <div className='flex items-center lg:items-start gap-3 flex-col'>
          <h1 className='text-ModeOne-text dark:text-ModeTwo-text'>Sluch <span className='text-ModeOne-third dark:text-ModeTwo-third'>.</span></h1>
          <p className='text-gray-400 lg:m-0 mx-auto lg:text-left text-center w-[65%] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet recusandae explicabo atque modi, voluptatem natus.</p>
          <div className='flex items-center gap-3'>
            {
              social.map(({icon , link}) => {
                return (
                  <Link href={link} className='text-ModeOne-text dark:text-ModeTwo-text text-2xl' key={link}>{icon}</Link>
                )
              })
            }
          </div>
        </div>
        <div className='grid grid-cols-2 lg:gap-12'>
          {
            dataOne.map(({title , links}) => {
              return (
                <div className='flex flex-col items-center lg:items-start gap-3' key={title}>
                  <h1 className='text-ModeOne-secondary dark:text-ModeTwo-secondary text-base font-bold'>{title}</h1>
                  <ul className='flex items-center lg:items-start flex-col gap-3'>
                    {
                      links.map((link) => {
                        return (
                          <Link href={link} className='text-ModeOne-text dark:text-ModeTwo-text text-xs' key={link}>{link}</Link>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <hr className='border-ModeOne-text dark:border-ModeTwo-text w-[80%] my-5' />
      <span className='tracking-[3px] text-sm text-ModeOne-secondary uppercase dark:text-ModeTwo-secondary'>Design By @SluchTeam Develobment 2024</span>
    </div>
  )
}

export default Footer
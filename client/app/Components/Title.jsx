import React from 'react'

const Title = ({text1}) => {
  return (
    <div className='flex items-center gap-3 flex-col'>
        <span className='text_line text-xl text-ModeOne-text dark:text-ModeTwo-text uppercase '>{text1}</span>
        <p className='w-[85%] text-ModeOne-secondary dark:text-ModeTwo-third text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet recusandae explicabo atque modi, voluptatem natus.</p>
    </div>
  )
}

export default Title
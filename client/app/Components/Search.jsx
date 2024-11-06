import React from 'react'
// import { useLocation } from 'react-router-dom';

const Search = () => {

  return (
    <div className="w-full absolute top-16 p-2 ">
        <input type="search" placeholder="Search..."
            className='w-[80%] mx-auto flex items-center justify-center rounded-lg p-2 outline-none border-[1px] border-ModeOne-text dark:border-ModeTwo-text text-ModeOne-primary dark:text-ModeTwo-primary'
        />
    </div>
  )
}

export default Search
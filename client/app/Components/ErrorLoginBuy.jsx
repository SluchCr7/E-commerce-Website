import React from 'react'
import { TiDelete } from "react-icons/ti";

const ErrorLoginBuy = ({ show, setShow }) => {
    return (
    <div className={`ScreenMenu relative ${show ? "flex" : "hidden"}`}>            
        <div className={`items-center flex-col p-10 rounded-md w-[400px] bg-ModeOne-primary dark:bg-ModeTwo-primary shadow-md absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 dark:shadow-white flex`}>
            <span className="text-ModeOne-text dark:text-ModeTwo-text text-2xl font-bold">You Can't Buy Now</span>
            <p className="text-ModeOne-text text-center dark:text-ModeTwo-text text-sm">Please Login First , Then You Can Buy and Checkout</p>
        <TiDelete className="text-ModeOne-text dark:text-ModeTwo-text text-xl absolute top-2 right-3 cursor-pointer" onClick={() => setShow(false)}/>
        </div>
    </div>
  )
}

export default ErrorLoginBuy
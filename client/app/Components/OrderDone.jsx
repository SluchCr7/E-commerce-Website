import React from 'react'

const OrderDone = () => {
  return (
    <div className='ScreenMenu'>
        <div className='flex flex-col items-center gap-2 bg-ModeOne-text dark:bg-ModeTwo-text text-ModeOne-primary dark:text-ModeTwo-primary p-5 rounded-md absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-xl uppercase tracking-[3px] font-bold'>Order Done</h1>
            <p className='text-sm text-center w-[70%]'>Order Has Been Done Successfully , You Will Get An Email With Your Order Details and delivery details and delivery will be call you as soon as possible</p>
        </div>
    </div>
  )
}

export default OrderDone
import React from 'react'
import Image from 'next/image'
const Features = () => {
    const feature = [
        {
            "img": "/frontend_assets/exchange_icon.png",
            'para' : "Easy Exchange of Orders"
            
        },
        {
            "img": "/frontend_assets/quality_icon.png",
            'para' : "7 days free return policy"
        },
        {
            "img": "/frontend_assets/clock.png",
            'para' : "fast delivery after make order"
        },
    ]
  return (
    <div className='flex items-center gap-10 p-5'>
        {
            feature.map((item, index) => {
                return (
                    <div key={index} className='flex items-center flex-col gap-3'>  
                        <Image src={item.img} alt={item.img} width={35} height={35} />
                        <p className='text-ModeOne-text uppercase w-[70%] dark:text-ModeTwo-text text-center text-xs font-bold'>{item.para}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Features
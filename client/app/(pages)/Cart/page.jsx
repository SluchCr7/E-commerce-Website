'use client'
import Image from 'next/image'
import React from 'react'
import { TiDelete } from "react-icons/ti";
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import { shopContext } from '../../Context/ShopContext'
import { useRouter } from 'next/navigation'
const page = () => {
  const { products, currancy, productCart  ,calcTotal,delivery_fee, removeFromCart} = useContext(shopContext)
  const [productsCartArr, setProductsCartArr] = useState([])
  const router = useRouter()
  useEffect(() => {
    const tempData = []
    for (let key in productCart) {
      for (let size in productCart[key]) {
        tempData.push({
          id: key,
          size: size,
          count: productCart[key][size]
        })
      }
    }
    setProductsCartArr(tempData)
  }, [productsCartArr])
  return (
    <div className='flex items-start gap-10 p-10 bg-ModeOne-primary dark:bg-ModeTwo-primary'>
      <div className='w-[60%] flex flex-col items-start gap-4'>
        <span className='text_headlineLeft text-xl text-ModeOne-text dark:text-ModeTwo-text font-bold'>Your Cart</span>
        <div className='flex w-full items-start flex-col gap-3'>
          {
            productsCartArr.length > 0 ? (
              productsCartArr.map((item, index) => {
                const productsAll = products.find((product) => product._id == item.id)
                const total = productsCartArr[index].count * productsAll.price
                return (
                  <div className='flex w-[100%] justify-between items-center gap-3' key={index}>
                    <div className='flex items-center gap-3'>
                      <Image src={productsAll.image} alt={productsAll._id} width={100} height={100} className='rounded-lg' />
                      <div className='flex flex-col items-start gap-1'>
                        <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>{productsAll.name}</span>
                        <div className='flex items-center gap-3'>
                          <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>{currancy}{productsAll.price}</span>
                          <span className='text-ModeOne-text dark:text-ModeTwo-text text-sm font-bold border-[1px] border-ModeOne-text dark:border-ModeTwo-text px-2 py-1'>{item.size}</span>
                          <span className=' text-ModeOne-text dark:text-ModeTwo-text font-bold' >{item.count}</span>
                        </div>
                      </div>
                    </div>
                    <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>{currancy}{total}</span>
                    <div onClick={() => removeFromCart(item.id , item.size)} className='flex items-center gap-3'>
                      <TiDelete className='text-ModeOne-text dark:text-ModeTwo-text font-bold' />
                    </div>
                  </div>
                )
              })
            ) : (
              <div className='flex items-center justify-center w-full'>
                <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold uppercase'>Cart is empty</span>
              </div>
            )
          }
        </div>
      </div>
      <div className='w-[40%] flex items-start flex-col gap-4'>
        {
          productsCartArr.length > 0 ? (
            <>            
            <span className='text_headlineLeft text-xl text-ModeOne-text dark:text-ModeTwo-text font-bold'>Cart Total :</span>
            <div className='flex w-full justify-between items-center'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text text-sm'>Subtotal :</span>
              <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>
                {currancy}
                {
                  calcTotal(productsCartArr)
                }
              </span>
            </div>
            <div className='flex w-full justify-between items-center'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text text-sm'>Taxes :</span>
              <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>{delivery_fee}</span>
            </div>
            <hr className='border-[1px] w-full border-ModeOne-text dark:border-ModeTwo-text my-1' />
            <div className='flex w-full justify-between items-center'>
                <span className='text-ModeOne-text dark:text-ModeTwo-text text-sm'>Total :</span>
                <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>
                  {currancy}
                  {
                    calcTotal(productsCartArr) + delivery_fee
                  }
              </span>
            </div>
            <button onClick={() => router.push('/PlaceOrder')} className='bg-ModeOne-text  dark:bg-ModeTwo-text text-ModeOne-secondary dark:text-ModeTwo-third px-4 py-2 rounded-md text-sm font-bold'>
              <Link href={'../PlaceOrder'}>Checkout</Link>
            </button>
              </>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  )
}

export default page
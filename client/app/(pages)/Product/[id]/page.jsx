'use client'
import React, { useEffect  , useContext, useState} from 'react'
import Image from 'next/image'
import { shopContext } from '../../../Context/ShopContext'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { authContext } from '@/app/Context/authContext';
import ErrorLoginBuy from '@/app/Components/ErrorLoginBuy';
const page = ({ params }) => {
  const id = params.id
  const [show , setShow] = useState(false)
  const { products, currancy , addToCart} = useContext(shopContext)
  const [product , setProduct] = useState(products.filter(product => product._id == id)[0])
  const [Size, setSize] = useState("")
  const [related, setRelated] = useState([])
  const {loginStatus , user} = useContext(authContext)
  useEffect(() => {
    setRelated(products.filter(item => item.category == product.category && item._id != product._id && item.subCategory == product.subCategory))
  }, [product])


  return (
    <div className='flex items-start flex-col justify-center w-full'>
      <ToastContainer />
        <div className='flex flex-col md:flex-row items-start gap-8 justify-center w-full p-5'>
          <div className='flex items-start gap-3'>
            <Image src={product.image} alt={product._id} width={400} height={400} quality={100} className='rounded-lg' />
          </div>
          <div className='flex items-start flex-col gap-3'>
            <h1 className='text-ModeOne-text dark:text-ModeTwo-text text-xl font-bold'>{product.name}</h1>
            {
              product.rating > 0 ? (
                <>
                  <div className='flex items-center gap-3'>
                    {
                      [...Array(product.rating)].map((star, index) => {
                        return (
                          <div key={index}>
                            <FaStar className='text-ModeOne-third dark:text-ModeTwo-third' key={index} />
                          </div>
                        )
                      })
                    }
                    <span className='text-ModeOne-secondary dark:text-ModeTwo-secondary'>{product.rating}</span>
                  </div>
                </>
              ) : null
            }       
            <span className='text-xl dark:text-ModeTwo-text text-ModeOne-text'>{product.price}{currancy}</span>
            <p className='text-ModeOne-text w-[60%] text-sm dark:text-ModeTwo-text'>{product.description}</p>
            <form action="" className='flex flex-col items-start gap-2'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>Selected Size</span>
              <div className='flex items-center gap-4'>
                {
                  product.sizes.map((size) => {
                    return (
                      <div key={size} className={` ${Size == size ? "border-[1px] border-ModeOne-secondary dark:border-ModeTwo-third" : "border-[1px] border-ModeOne-text dark:border-ModeTwo-text"}  hover:bg-ModeOne-text dark:hover:bg-ModeTwo-text  text-ModeOne-text dark:text-ModeTwo-text hover:text-ModeTwo-text dark:hover:text-ModeOne-text py-1 px-2 bg-transparent`}>
                        <option onClick={() => setSize(size)} className=' text-sm'>{size}</option>
                      </div>
                    )
                  })
                }
              </div>
            </form>
          <button
            onClick={
              loginStatus ?
                () => addToCart(product._id, Size)
                :
                ()=> setShow(true)
            }
            className='bg-ModeOne-text dark:bg-ModeTwo-text p-3 rounded-md text-sm text-ModeOne-primary dark:text-ModeTwo-primary'>
            Add to Cart
          </button>
            <hr  className='border-[1px] w-[60%] border-gray-400 dark:border-ModeTwo-text my-3'/>
            <ul className='flex pl-5 text-sm list-disc items-start flex-col gap-3 text-gray-400'>
              <li>100% Original</li>
              <li>Easy return before 7 days from deliver to you</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-start gap-2 p-5'>
          <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>description</span>
          <p className='text-gray-400 text-xs w-[60%]'>{product.description}</p>
        </div>
        <div className='flex justify-center w-full text-center flex-col gap-2 p-5 pb-9'>
          <span className='text-ModeOne-text dark:text-ModeTwo-text font-bold'>Related Products</span>
          <div className='flex items-center gap-10 mx-auto'>
            {
              related.map((product) => {
                return (
                  <div key={product._id} className='w-[150px] h-[150px] relative'>  
                    <Link href={`/Product/${product._id}`}>
                      <Image src={product.image} alt={product._id} width={150} height={150} quality={100} className='rounded-lg' />
                      <h3 className='text-ModeOne-text dark:text-ModeTwo-text pt-1 text-xs font-bold'>{product.name}</h3>
                    </Link> 
                  </div>
                )
              }).slice(0 , 5)
            }
        </div>
      </div>
      <ErrorLoginBuy show={show} setShow={setShow}/>
    </div>
  )
}


export default page
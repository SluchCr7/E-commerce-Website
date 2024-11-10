'use client'
import { shopContext } from '@/app/Context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  const {products , currancy} = useContext(shopContext)
  const [selectedCategory, setSelectedCategory] = useState({
    Men: false,
    Women: false,
    Kids: false,
  })
  const [productsSort , setProductsSort] = useState("")
  const[selectSubCategory , setSelectSubCategory] = useState({
    Winterwear: false,
    Topwear: false,
    Bottomwear: false,
  })
  const [search , setSearch] = useState("")
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategory((prevCategory) => ({
      ...prevCategory,
      [name]: checked,
    }));
  }
  const handleCheckboxChangeSub = (event) => {
    const { name, checked } = event.target;
    setSelectSubCategory((prevCategory) => ({
      ...prevCategory,
      [name]: checked,
    }));
  }
  const handleSortChange = (event) => {
    setProductsSort(event.target.value)
  }
  // Filter clothes based on selected categories
  const filteredClothes = products
    .filter((item) => {
      const categoryMatch = 
        (!selectedCategory.Men && !selectedCategory.Women && !selectedCategory.Kids) || 
        selectedCategory[item.category];
      
      const subCategoryMatch =
        (!selectSubCategory.Winterwear && !selectSubCategory.Topwear && !selectSubCategory.Bottomwear) ||
        selectSubCategory[item.subCategory];
      
      const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && subCategoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (productsSort === "Low") {
        return a.price - b.price;
      } else if (productsSort === "High") {
        return b.price - a.price;
      }
      return 0;
    })
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center gap-3 lg:items-start p-10'>
        <div className='w-[100%] lg:w-[30%] flex items-start flex-col gap-4'>
          <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg font-bold'>Filters</span>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3'>
            <div className='flex w-[200px] gap-2 flex-col items-start border-[1px] border-gray-500 p-4'>
              <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg font-bold'>Categories</span>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectedCategory.Men} onChange={handleCheckboxChange  } type="checkbox" name="Men" id="men" />
                <label htmlFor="men">Men</label>
              </div>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectedCategory.Women} onChange={handleCheckboxChange} type="checkbox" name="Women" id="Women" />
                <label htmlFor="Women">Women</label>
              </div>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectedCategory.Kids} onChange={handleCheckboxChange} type="checkbox" name="Kids" id="Kids" />
                <label htmlFor="Kids">Kids</label>
              </div>
            </div>
            <div className='flex w-[200px] flex-col items-start border-[1px] border-gray-500 gap-2 p-4'>
              <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg font-bold'>Type</span>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectSubCategory.Topwear} onChange={handleCheckboxChangeSub} type="checkbox" name="Topwear" id="Topwear" />
                <label htmlFor="Topwear">Topwear</label>
              </div>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectSubCategory.Bottomwear} onChange={handleCheckboxChangeSub} type="checkbox" name="Bottomwear" id="Bottomwear" />
                <label htmlFor="Bottomwear">Bottomwear</label>
              </div>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={selectSubCategory.Winterwear} onChange={handleCheckboxChangeSub} type="checkbox" name="Winterwear" id="Winterwear" />
                <label htmlFor="Winterwear">Winterwear</label>
              </div>
            </div>
            <div className='flex w-[200px] flex-col items-start border-[1px] border-gray-500 gap-2 p-4'>
              <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg font-bold'>Price</span>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={productsSort === "High"} onChange={handleSortChange} type="radio" value={"High"} name="High" id="High " />
                <label htmlFor="High">High to Low</label>
              </div>
              <div className='flex items-center text-ModeOne-text dark:text-ModeTwo-text text-sm gap-2'>
                <input checked={productsSort === "Low"} onChange={handleSortChange} type="radio" value={"Low"} name="Low" id="Low" />
                <label htmlFor="Low">Low to High</label>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] lg:w-[70%] flex items-start flex-col gap-5'>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full'>
            <span className='text-ModeOne-secondary dark:text-ModeTwo-third text-lg font-bold'>Collection</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search...' className='w-[100%] lg:w-[300px] border-[1px] border-gray-500 bg-transparent text-ModeOne-text dark:text-ModeTwo-text px-2 py-1 outline-none rounded-md' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              filteredClothes.map((product) => {
                return (
                  <>
                    <Link href={`/Product/${product._id}`} className='flex items-start flex-col gap-3' key={product._id}>
                      <Image src={product.image} alt={product._id} width={300} height={300} className='rounded-sm'/>
                      <h3 className='text-ModeOne-text dark:text-ModeTwo-text name font-bold'>{product.name}</h3>
                      <span className='text-lg text-ModeOne-third dark:text-ModeTwo-third'>{product.price} {currancy}</span>
                    </Link>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default page
'use client'
import { createContext, useEffect, useState } from 'react';
import { products } from '@/public/frontend_assets/assets';
export const shopContext = createContext();
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopContextProvider = (props) => {
    // const products = products
    const [productCart , setProductCart] = useState({})
    const [NumProducts , setNumProducts] = useState(0)
    const addToCart = async (id , size) => {
        let productData = structuredClone(productCart)

        if(!size) {
            toast.error("Please select size")
            return;
        }
        
        if (productData[id]) {
            if (productData[id][size]) {
                productData[id][size] += 1
                setNumProducts(NumProducts + 1)
            } else {
                productData[id][size] = 1
                setNumProducts(NumProducts + 1)
            }
        }
        else {
            productData[id] = {}
            productData[id][size] = 1
            setNumProducts(NumProducts + 1)
        }
        setProductCart(productData)
    }
    const removeFromCart = (id , size) => {
        let productData = structuredClone(productCart)
        if (productData[id]) {
            if (productData[id][size]) {
                if (productData[id][size] === 1) {
                    delete productData[id][size]
                    setNumProducts(NumProducts - 1)
                } else {
                    productData[id][size] -= 1
                    setNumProducts(NumProducts - 1)
                }
            }
        }
        setProductCart(productData)
    }
    const calcTotal = (productCart) => {
        return productCart.reduce((total , item) => {
            const productsAll = products.find((product) => product._id == item.id)
            return total + productsAll.price * item.count
        }, 0)
    }
    useEffect(()=>{
        console.log(productCart)
    },[productCart])
    const currancy = "$"
    const delivery_fee = 10
    const value = { products, currancy, calcTotal , delivery_fee, removeFromCart,NumProducts, addToCart, productCart }
    return (
        <shopContext.Provider value={value}>
            <ToastContainer/>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider
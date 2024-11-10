'use client'
import React from 'react'
import Nav from "../Components/Nav";
import ShopContextProvider from "../Context/ShopContext";
import AuthContextProvider from '../Context/authContext';
import Footer from "../Components/Footer";
import Search from './Search';
import { useState  , useEffect} from 'react';
import { VerifyContextProvider } from '../Context/verifyContext';
// import { useLocation } from 'react-router-dom';
const Layout = ({ children }) => {
    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
  return (
    <div>
      <VerifyContextProvider>
      <AuthContextProvider>
        <ShopContextProvider>
          <Nav setSearch={setSearch} search={search}/>
          {search && <Search />}
          {children}
          <Footer />
        </ShopContextProvider>
        </AuthContextProvider>
        </VerifyContextProvider>
    </div>
  )
}

export default Layout
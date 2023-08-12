import React from 'react'
import Navbar from "../../components/Navbar/navbar";
import HeaderArticle from './HeaderArticle';
import Banner from './Banner';
const Header = () => {
  return (
    <>
    <header className=''>
    <Navbar/>
    <div className='flex flex-col items-center md:flex-row md:justify-between'>
    <HeaderArticle/>
    <Banner/>
    </div>
    </header>
    </>
  )
}

export default Header
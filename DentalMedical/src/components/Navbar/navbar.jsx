// Make Navbar for Home Page in Header Layout
import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg';
import { PaginationGetPosts } from '../../services/paginationAPI';
const Navbar = () => {

  //Fetching Data Pagination
  const [dataPagination,setDataPagination]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await PaginationGetPosts();
      setDataPagination(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);

  
  // HOOK Top Drawer
  const [drawerTop,setDrawerTop] = useState(false);
  const handleClicked = ()=>{
    setDrawerTop(!drawerTop);
  }
  {(drawerTop) ? (document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'auto')}

  
  // HOOK Active Link
  const [activeLink, setActiveLink] = useState(false);
  const handleLinkClick = (link)=>{
    setActiveLink(link);
  }

  return (
    <>
    <nav className='flex flex-row justify-between h-max  items-center md:bg-[#E6F6FE] md:rounded-[0.63rem] md:px-8 md:py-5'>
      <div id='logo' className='flex flex-row items-center gap-2'>
      <svg className='w-10' viewBox="0 0 155 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M153.548 33.274C149.742 17.6413 137.262 4.90556 121.74 0.87466C110.611 -2.01542 99.9603 2.63775 90.9236 9.28562C89.8001 10.1118 88.5175 10.5751 87.2938 11.1801L97.0841 17.4753C99.6492 19.1243 100.396 22.5468 98.7435 25.1188C97.2016 27.5215 93.8103 28.5275 91.0999 26.7782L56.3533 4.43886C49.1973 0.687981 41.3567 -1.23067 33.2569 0.87466C17.7348 4.90902 5.25495 17.6413 1.44876 33.274C-2.05321 47.6621 1.30356 61.2102 8.88138 71.45C16.957 82.3638 20.179 95.1859 21.4269 108.561C22.948 124.865 24.9981 141.113 28.666 157.07L31.3625 168.807C32.4652 173.602 36.7174 177 41.6195 177C46.4489 177 50.6596 173.699 51.8315 168.994L63.7479 121.141C65.3243 114.808 70.9939 110.369 77.4931 110.369C83.9923 110.369 89.6618 114.811 91.2382 121.141L103.155 168.994C104.327 173.699 108.537 177 113.367 177C118.269 177 122.521 173.602 123.624 168.807L126.32 157.07C129.988 141.116 132.035 124.865 133.559 108.561C134.807 95.1825 138.029 82.3638 146.105 71.45C153.693 61.2137 157.05 47.6656 153.548 33.274Z" fill="black"/>
      </svg>
      <h1 className='font-generalSans font-semibold text-2xl'>Dental</h1>
      </div>
      <div id='menuMobile'>
      <button onClick={handleClicked} className='bg-[#1376F8] h-[3.125rem] relative z-[60] px-[0.75rem] py-[1.5625rem] flex flex-row items-center justify-center rounded-lg md:hidden'>
      {
        drawerTop ? (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.5rem] h-[1.5rem] fill-white' viewBox="0 0 384 512"><path d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"/></svg>
        ):(
        <svg className='w-[1.5rem]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 3.5C3.5 3.5 3.5 3.708 3.5 6.25V6.275C3.5 7.382 3.5 8.182 3.771 8.52C4.036 8.848 4.823 9 6.25 9C7.677 9 8.464 8.847 8.729 8.519C9 8.182 9 7.382 9 6.274C9 3.708 9 3.5 6.25 3.5ZM6.25 10.5C4.564 10.5 3.299 10.323 2.604 9.46C2 8.711 2 7.689 2 6.275L2.75 6.25H2C2 3.38 2.181 2 6.25 2C10.319 2 10.5 3.38 10.5 6.25C10.5 7.688 10.5 8.711 9.896 9.46C9.201 10.323 7.936 10.5 6.25 10.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 3.5C14.5 3.5 14.5 3.708 14.5 6.25V6.275C14.5 7.382 14.5 8.182 14.771 8.52C15.036 8.848 15.823 9 17.25 9C18.677 9 19.464 8.847 19.729 8.519C20 8.182 20 7.382 20 6.274C20 3.708 20 3.5 17.25 3.5ZM17.25 10.5C15.564 10.5 14.299 10.323 13.604 9.46C13 8.711 13 7.689 13 6.275L13.75 6.25H13C13 3.38 13.181 2 17.25 2C21.319 2 21.5 3.38 21.5 6.25C21.5 7.688 21.5 8.711 20.896 9.46C20.201 10.323 18.936 10.5 17.25 10.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 14.5C3.5 14.5 3.5 14.708 3.5 17.25V17.275C3.5 18.382 3.5 19.182 3.771 19.52C4.036 19.848 4.823 20 6.25 20C7.677 20 8.464 19.847 8.729 19.519C9 19.182 9 18.382 9 17.274C9 14.708 9 14.5 6.25 14.5ZM6.25 21.5C4.564 21.5 3.299 21.323 2.604 20.46C2 19.711 2 18.689 2 17.275L2.75 17.25H2C2 14.38 2.181 13 6.25 13C10.319 13 10.5 14.38 10.5 17.25C10.5 18.688 10.5 19.711 9.896 20.46C9.201 21.323 7.936 21.5 6.25 21.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 14.5C14.5 14.5 14.5 14.708 14.5 17.25V17.275C14.5 18.382 14.5 19.182 14.771 19.52C15.036 19.848 15.823 20 17.25 20C18.677 20 19.464 19.847 19.729 19.519C20 19.182 20 18.382 20 17.274C20 14.708 20 14.5 17.25 14.5ZM17.25 21.5C15.564 21.5 14.299 21.323 13.604 20.46C13 19.711 13 18.689 13 17.275L13.75 17.25H13C13 14.38 13.181 13 17.25 13C21.319 13 21.5 14.38 21.5 17.25C21.5 18.688 21.5 19.711 20.896 20.46C20.201 21.323 18.936 21.5 17.25 21.5Z" fill="white"/>
        </svg>
        )
      }
      </button>
      {
        drawerTop ? (
        <>
        <div className='bg-[#1376F8] w-full h-96 shadow-lg pt-32 px-8 z-50 transition-all duration-500 fixed top-0 left-0 md:h-0 md:-top-96 md:transition-all md:duration-500'>
          <Link id="home">
          
          </Link>
        </div>
        <div className='bg-black overflow-hidden fixed h-screen transition-all duration-500 w-full left-0 top-0 z-40 opacity-50 md:-z-40 md:opacity-0'></div>
        </>
        ):(
        <>
        <div className='-top-96 left-0 h-0 w-full shadow-none fixed transition-all duration-500'></div>
        <div className='bg-black fixed h-screen transition-all duration-500 w-full left-0 top-0 opacity-0 md:-z-40'></div>
        </>
        )
      }
      </div>
      <div id='panigator' className=' hidden md:flex md:flex-row md:gap-10'>
        {dataPagination.map((data)=>(
        <div key={data.id}>
          <Link to={data.to} onClick={()=>handleLinkClick(data.id)} className={`transition-all duration-200 hover:font-bold ${activeLink === (data.id) ? ('font-bold'):('font-normal')}`}>{data.desc}</Link>
        </div>
        ))}
      </div>
        {/* <Link to='/home'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/services'>Blogs</Link>
        <Link to='/services'>About</Link>
        <Link to='/services'>Contact</Link> */}
      <div id="profileAndBook" className='hidden md:flex md:flex-row md:gap-6'>
        <div className='relative cursor-pointer'>
        <img src={profile} alt="" className='w-[60px] h-[60px] object-cover rounded-full transition-all' />
        <div id='ping' className='absolute cursor-default right-1 top-0 h-3 flex flex-row justify-center items-center w-3 p-0.5 rounded-full'>
          <div className='bg-[#42cd50] animate-ping absolute h-full w-full rounded-full'></div>
          <div className='bg-[#17BF28] absolute h-3 w-3 rounded-full border border-[#E6F6FE]'></div>
        </div>
        </div>
        <button className='bg-[#1376F8] font-generalSans font-semibold text-white px-8 rounded-xl'>Book Now</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
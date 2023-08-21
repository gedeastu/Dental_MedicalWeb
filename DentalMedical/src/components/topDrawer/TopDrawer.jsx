import React, { useReducer } from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg';
import { PaginationGetPosts } from '../../services/paginationAPI';
const initialState = {
  drawerTop: false,
}
function reducer(state,action){
  switch(action.type){
    case "OpenDrawer":
      return {
        ...state,
        drawerTop: !state.drawerTop,
      }
  }
}
const TopDrawer = () => {
  const [{drawerTop},dispatch] = useReducer(
    reducer,initialState
  )
  //  // HOOK Top Drawer
  // const [drawerTop,setDrawerTop] = useState(false);
  // const handleClicked = ()=>{
  //   setDrawerTop(!drawerTop);
  // }
  {(drawerTop) ? (document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'auto')}
  return (
    <>
    <div id='menuMobile'>
      <button onClick={()=> dispatch({type: "OpenDrawer"})} className='bg-[#1376F8] h-[3.125rem] relative z-[60] px-[0.75rem] py-[1.5625rem] flex flex-row items-center justify-center rounded-lg md:hidden'>
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
    </>
  )
}

export default TopDrawer
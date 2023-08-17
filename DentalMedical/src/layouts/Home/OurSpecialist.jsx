import React, { useEffect, useState } from 'react'
import Navigate from '../../components/swiperNavigation/Navigate'
import './OurSpecialist.css'
import Swiper from 'swiper'
import { NavigateGetPosts } from '../../services/navigateAPI'
import { SwiperSlide } from 'swiper/react'
const OurSpecialist = () => {

  // Resposive with window dom
  // const [responsiveWithWindow,setResponsiveWithWindow] = useState(window.innerWidth);
  // const resize = ()=>{
  //   setResponsiveWithWindow(window.innerWidth);
  // }
  // useEffect(()=>{
  //   window.addEventListener('resize', resize);
  //   return ()=>{
  //     window.removeEventListener('resize',resize)
  //   }
  // },[])
// fecthing navigate data API
  const [dataNavigate,setDataNavigate]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await NavigateGetPosts();
      setDataNavigate(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <>
     <div className='w-full h-full relative p-10 bg-[#E6F6FE] flex flex-col justify-center items-center my-28 rounded-2xl'>
      <Navigate
      content={
        <>
        {/* <div id="carouselController">
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
        <div className="swiper-pagination"></div>
        </div> */}
        </>
      }
      buttonNext={
        <div className='bg-white h-full w-20 p-2 flex transition-all items-center group hover:bg-[#1376F8]'>
        {/* <svg className='rotate-180 w-20 group-hover:fill-white' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg> */}
        <svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </div>
      }
      buttonPrev={
        <div className='bg-white h-full w-20 p-2 flex items-center group hover:bg-[#1376F8]'>
        {/* <svg className='w-20 group-hover:text-base' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg> */}
        <svg className='rotate-180 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </div>
      }
      />
     </div>
    </>
  )
}
export default OurSpecialist;
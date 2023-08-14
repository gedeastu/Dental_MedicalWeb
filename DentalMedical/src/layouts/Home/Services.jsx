import React, { useEffect, useState } from 'react'
import Navigate from '../../components/swiperNavigation/Navigate'
import './Services.css'
import Swiper from 'swiper'
import { NavigateGetPosts } from '../../services/navigateAPI'
import { SwiperSlide } from 'swiper/react'
const Services = () => {

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
     <div className='w-full h-full relative p-5 bg-[#E6F6FE] flex flex-col justify-center items-center my-16 rounded-2xl'>
      <Navigate
      content={
        <>
        {dataNavigate.map((data)=>(
          <SwiperSlide key={data.id} className=''>
            <div className='bg-white rounded-xl text-center font-generalSans flex flex-col items-center gap-5 p-5'>
            <div className='bg-[#1376F8] p-3 w-20 flex justify-center items-center rounded-full h-20'>
            <span className='' dangerouslySetInnerHTML={{ __html: data.icon }}></span>
            </div>
            <h1 className='font-medium text-xl'>{data.title}</h1>
            <p className='font-thin text-md w-[17rem]'>{data.desc}</p>
            <div id="learnMore" className='flex items-end gap-2.5'>
            <a href="" className='font-generalSans text-md border-b border-black'>Learn More</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20Z" fill="#011632"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55846 14.221C8.36646 14.221 8.17346 14.148 8.02746 14C7.73546 13.706 7.73646 13.232 8.02946 12.94L10.9815 10L8.02946 7.06105C7.73646 6.76905 7.73546 6.29405 8.02746 6.00005C8.31946 5.70505 8.79346 5.70705 9.08746 5.99805L12.5735 9.46905C12.7145 9.61005 12.7935 9.80105 12.7935 10C12.7935 10.2 12.7145 10.391 12.5735 10.532L9.08746 14.002C8.94146 14.148 8.74946 14.221 8.55846 14.221Z" fill="#011632"/>
            </svg>
            </div>
            </div>
          </SwiperSlide>
        ))
       }
        {/* <div id="carouselController">
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
        <div className="swiper-pagination"></div>
        </div> */}
        </>
      }
      buttonNext={
        <div className='bg-white h-full w-20 p-2 flex items-center'>
        <svg className='w-20' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg>
        </div>
      }
      buttonPrev={
        <div className='bg-white h-full w-20 p-2 flex items-center'>
        <svg className='rotate-180 w-20' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg>
        </div>
      }
      />
     </div>
    </>
  )
}
export default Services;
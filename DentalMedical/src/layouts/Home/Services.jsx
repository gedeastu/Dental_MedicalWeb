import React, { useEffect, useState } from 'react'
import Navigate from '../../components/swiperNavigation/Navigate'
import './Services.css'
import Swiper from 'swiper'
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

  // fecthing fade doctor data API
  // const [dataFadeDoctor,setDataFadeDoctor]= useState([]);
  // const fetchData = async () =>{
  //   try{
  //     const data = await FadeDoctorGetPosts();
  //     setDataFadeDoctor(data);
  //   }catch(error){
  //     console.error(error);
  //   }
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[]);
  return (
    <>
     <div className='w-full h-96 bg-[#E6F6FE] my-16 rounded-2xl'>
      <Navigate
      content={
        <>
        <SwiperSlide>
          1
        </SwiperSlide>
        <SwiperSlide>
          2
        </SwiperSlide>
        <SwiperSlide>
          3
        </SwiperSlide>
        <SwiperSlide>
          4
        </SwiperSlide>
        <SwiperSlide>
          5
        </SwiperSlide>
        <SwiperSlide>
          6
        </SwiperSlide>
        <SwiperSlide>
          7
        </SwiperSlide>
        <SwiperSlide>
          8
        </SwiperSlide>
        {/* <div id="carouselController">
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
        <div className="swiper-pagination"></div>
        </div> */}
        </>
      }
      />
     </div>
    </>
  )
}
export default Services;
import React from 'react'
import "./NavigateMobile.css"
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import SwiperCore from "swiper/core";
import 'swiper/css';
// SwiperCore.use([Navigation]);
// import 'swiper/css/navigation';
const NavigateMobile = ({content, buttonNext, buttonPrev, displayBtn}) => {
  const swiper = useSwiper();
  return (
    <>
    <Swiper
    modules={[Navigation,Autoplay]}
    spaceBetween={50}
    navigation={{
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
        clickable : true
    }}
    loop
    autoplay
    breakpoints={{
        360:{
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
          autoplay:{
            delay:5000
          }
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    className='w-[25rem] h-[25rem] my-auto flex flex-col items-center justify-between md:w-full md:h-full md:p-4'
    >
    {content}
    <div id="carouselController" className={`flex flex-row-reverse w-48 absolute bottom-5 ${displayBtn}`}>
        <button className="swiper-prev-button swiper-button-prev w-20">
        {buttonPrev}
        </button>
        <button className="swiper-next-button swiper-button-next w-20">
        {buttonNext}
        </button>
        {/* <div className="swiper-pagination"></div> */}
    </div>
    </Swiper>
    </>
  )
}

export default NavigateMobile
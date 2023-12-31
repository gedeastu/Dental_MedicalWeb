import React from 'react'
import "./NavigateDesktop.css"
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import SwiperCore from "swiper/core";
import 'swiper/css';
// SwiperCore.use([Navigation]);
import 'swiper/css/navigation';
const NavigateDesktop = ({content, buttonNext, buttonPrev, displayBtn, style}) => {
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
          autoplay:false
        },
        768:{
            slidesPerView: 3,
            spaceBetween:0,
            // autoplay:false,
            // loop: false
            autoplay:{
              delay:5000
            }
        },
    }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    className={style}
    >
    {content}
    <div id="carouselController" className={`flex flex-row-reverse mx-auto w-96 absolute bottom-5 ${displayBtn}`}>
        <button className="swiper-prev-button swiper-button-prev w-max">
        {buttonPrev}
        </button>
        <button className="swiper-next-button swiper-button-next w-max">
        {buttonNext}
        </button>
        {/* <div className="swiper-pagination"></div> */}
    </div>
    </Swiper>
    </>
  )
}

export default NavigateDesktop
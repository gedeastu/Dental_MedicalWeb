import React from 'react'
import "./Navigate.css"
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import SwiperCore from "swiper/core";
import 'swiper/css';
// SwiperCore.use([Navigation]);
// import 'swiper/css/navigation';
const Navigate = ({content}) => {
  const swiper = useSwiper();
  return (
    <>
    <Swiper
    modules={[Navigation,Autoplay]}
    spaceBetween={50}
    navigation={{
        nextEl: '.swiper-next-control',
        prevEl: '.swiper-prev-control',
        clickable : true
    }}
    loop
    breakpoints={{
        360:{
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 20,
            // slidesPerGroup: 2,
        }
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className='w-96'
    >
    {content}
    <div id="carouselController" className='flex md:hidden'>
        <button className="swiper-prev-control">
        <svg width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg>
        </button>
        <button className="swiper-next-control">
        <svg className='rotate-180' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg>
        </button>
        {/* <div className="swiper-pagination"></div> */}
    </div>
    </Swiper>
    </>
  )
}

export default Navigate
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
const Fade = ({content}) => {
  return (
    <>
     <Swiper
        spaceBetween={30}
        effect={'fade'}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        loop
        autoplay={true}
        modules={[EffectFade, Autoplay,Navigation]}
        className="relative z-10 w-[28rem] md:w-[30rem] rounded-lg shadow-lg border h-full"
      >
        {content}
      </Swiper>
    </>
  )
}

export default Fade;
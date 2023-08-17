import React from 'react'
import './Quality.css'
import Button from '../../components/button/button';
import Smile from '../../assets/smile02.jpg'
const Quality = () => {
  return (
    <>
    <article className='flex flex-col justify-center gap-10 my-24 md:flex-row md:justify-between md:items-center md:px-20'>
    <div id="desc" className='relative flex flex-col gap-6'>
    <h1 className='font-generalSans text-[2.5rem] font-semibold leading-tight w-[27rem] md:w-[40rem] md:text-5xl md:leading-snug'>Leave Your Worries At The Door And Enjoy A Healthier, More Precise Smile</h1>
    <p className='font-generalSans font-thin text-xl md:text-2xl'>We use only the best quality materials on the
    <br className='md:hidden'/> 
    market in order to 
    <br className='hidden md:flex'/>
    provide the best products 
    <br className='md:hidden'/>
    to our patients, So don’t worry about <br className='hidden md:flex'/>
    anything <br className='md:hidden'/>
    and book yourself.</p>
   <Button 
   className={'bg-[#1376F8] w-60 h-14 rounded-xl'}
   content={'Book an appointment'}
   /> 
    </div>
    <div id="banner" className='flex flex-col items-center'>
    <div id="image" className='w-[100%] transition-all relative h-[25rem] md:h-[23rem] md:w-[28rem]'>
    <div className='Gradient hidden w-[28rem] h-[23rem] rounded-xl md:flex md:scale-105'></div>
    {/* <Fade
      delay={
        {delay: 5000}
      }
       content={
        <>
        <SwiperSlide className='rounded-xl overflow-hidden'>
          <div id='bgGradient' className='bg-gradient-to-tr hidden from-[#60b9e2] via-[#5acbff] to-[#03bbea] w-[28rem] h-[23rem] rounded-xl md:flex md:scale-105'>

          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-xl overflow-hidden'>
          <div id='bgGradient' className='bg-gradient-to-bl hidden from-[#80d5fc] via-[#24b1f3] to-[#3fc2ff] w-[28rem] h-[23rem] rounded-xl md:flex md:scale-105'>

          </div>
        </SwiperSlide>
        </>
       }
    /> */}
    <img src={Smile} alt="" className='rounded-xl z-10 transition-all shadow-md object-cover w-full h-full md:absolute md:top-8 md:-left-8 md:scale-105'/>
    </div>
    </div>
    </article>
    </>
  )
}

export default Quality;
import React from 'react'
import './numberPhone.css'
import Button from '../../components/button/button';
import dentistPatient from '../../assets/patientDentist01.jpg'
import Fade from '../../components/swiperFade/Fade';
import { BsTelephone } from "react-icons/bs";
import { SwiperSlide } from 'swiper/react';
const NumberInput = () => {
  return (
    <>
    <article className='flex flex-col justify-center gap-10 md:my-16 md:flex-row md:justify-between md:items-center md:px-20'>
    <div id="desc" className='relative flex flex-col gap-6'>
    <h1 className='font-generalSans font-semibold text-4xl leading-tight md:leading-snug md:text-[3.5rem]'>We’re <span className='relative z-20'>Welcoming
      <svg className={'absolute w-full font-bold left-0 bottom-1 -z-10 md:w-full md:right-0'} viewBox="0 0 533 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2525 1.84646C23.5492 2.40025 53.2374 2.42795 133.83 2.48333C259.678 2.5664 359.557 3.17556 387.316 4.06163C389.521 4.1447 213.113 4.75387 194.997 4.31083C166.756 3.5909 31.8839 4.20008 4.74425 5.03077C-2.97055 5.25228 -0.077469 6.02759 4.95093 6.19373C12.8035 6.47063 33.8816 6.44293 91.674 6.38755C132.314 6.35986 455.648 6.99673 490.984 8.132C510.822 8.76886 522.877 9.35034 528.387 9.2119C533.002 9.10114 533.071 8.76886 529.076 7.85511C526.39 7.24594 529.42 6.88597 531.349 6.71983C534.311 6.44294 533.071 5.50149 529.352 4.75387C524.323 3.72935 515.644 3.75705 519.777 4.78156C520.672 5.00308 520.879 5.55687 517.71 5.44611C508.48 5.11383 443.249 2.84329 425.546 2.45564C236.533 -1.75318 52.0663 1.32036 13.0101 0.295843C-0.835204 -0.0918116 5.50205 1.51419 12.2525 1.84646Z" fill="#25B4F8"/>
      </svg></span> New 
      <br />
      Patients And Can’t 
      <br className='md:hidden'/> Wait 
      <br className='hidden md:flex'/>
      To Meet You.
    </h1>
    <p className='font-generalSans font-thin text-xl md:text-2xl'>We use only the best quality materials on the
    <br className='md:hidden'/> 
    market in order to 
    <br className='hidden md:flex'/>
    provide the best products 
    <br className='md:hidden'/>
    to our patients, So don’t worry about <br className='hidden md:flex'/>
    anything <br className='md:hidden'/>
    and book yourself.</p>
    <div id='inputForm' className='flex flex-row items-center'>
    <input id='inputNumber' type="number" className="input-number w-full h-[3.5rem] border-y-2 border-l-2 text-[#1376F8] pl-[1rem] font-medium rounded-tl-lg rounded-bl-lg placeholder:flex-row placeholder:gap-10 placeholder:flex placeholder:items-center md:w-96"
    placeholder='Enter your Phone Number'
    />
    <Button 
    content={
      "Submit"
    }
    className={
      'text-white font-generalSans font-medium bg-[#1376F8] h-14 w-28 rounded-tr-lg rounded-br-lg'
    }
    />
    </div>
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
    <img src={dentistPatient} alt="" className='rounded-xl z-10 shadow-md transition-all object-cover w-full h-full md:absolute md:top-8 md:-left-8 md:scale-105'/>
    </div>
    </div>
    </article>
    </>
  )
}

export default NumberInput;
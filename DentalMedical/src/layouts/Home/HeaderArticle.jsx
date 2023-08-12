import React, { useEffect, useState } from 'react'
import Button from '../../components/button/button';
import Fade from '../../components/swiperFade/Fade';
import { FadeDoctorGetPosts } from '../../services/fadeDoctorAPI';
import './HeaderArticle.css'
import { SwiperSlide } from 'swiper/react';
const HeaderArticle = () => {

  // Resposive with window dom
  const [responsiveWithWindow,setResponsiveWithWindow] = useState(window.innerWidth);
  const resize = ()=>{
    setResponsiveWithWindow(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', resize);
    return ()=>{
      window.removeEventListener('resize',resize)
    }
  },[])

  // fecthing fade doctor data API
  const [dataFadeDoctor,setDataFadeDoctor]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await FadeDoctorGetPosts();
      setDataFadeDoctor(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
    <article className='flex flex-col gap-8 md:flex-row'>
      <div className='flex flex-col items-start gap-9 md:gap-12'>
      <div id='h1'>
        <h1 className='text-[#011632] font-generalSans font-semibold text-5xl leading-tight md:text-7xl md:leading-tight'>Get Ready For Your Best <br className='hidden md:flex' /> Ever <span className='relative z-20'>Dental Experience!
        <svg className={'absolute w-72 -z-20 font-bold md:w-full md:right-0'} viewBox="0 0 533 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2525 1.84646C23.5492 2.40025 53.2374 2.42795 133.83 2.48333C259.678 2.5664 359.557 3.17556 387.316 4.06163C389.521 4.1447 213.113 4.75387 194.997 4.31083C166.756 3.5909 31.8839 4.20008 4.74425 5.03077C-2.97055 5.25228 -0.077469 6.02759 4.95093 6.19373C12.8035 6.47063 33.8816 6.44293 91.674 6.38755C132.314 6.35986 455.648 6.99673 490.984 8.132C510.822 8.76886 522.877 9.35034 528.387 9.2119C533.002 9.10114 533.071 8.76886 529.076 7.85511C526.39 7.24594 529.42 6.88597 531.349 6.71983C534.311 6.44294 533.071 5.50149 529.352 4.75387C524.323 3.72935 515.644 3.75705 519.777 4.78156C520.672 5.00308 520.879 5.55687 517.71 5.44611C508.48 5.11383 443.249 2.84329 425.546 2.45564C236.533 -1.75318 52.0663 1.32036 13.0101 0.295843C-0.835204 -0.0918116 5.50205 1.51419 12.2525 1.84646Z" fill="#25B4F8"/>
        </svg></span></h1>
      </div>
      <div id="desc">
        <p className='font-generalSans text-[#3C4959] text-xl md:text-xl'>We use only the best quality materials on the 
        <br className='md:hidden'/>
        market in order to 
        <br className='hidden md:flex'/>
        provide the best products 
        <br className='md:hidden'/>
        to our patients, So don’t worry about 
        <br className='hidden md:flex'/> anything 
        <br className='md:hidden'/>
        and book yourself.</p>
      </div>
      <div id='btn' className='flex flex-row items-center gap-5'>
        <Button
        className="bg-[#1376F8] relative p-10 md:px-5 py-4 rounded-xl font-generalSans font-medium text-white"
        content={responsiveWithWindow < 768 ? ("Get Started"):("Book an appointment")}
        />
        <div id="contact" className='flex flex-row items-center gap-3'>
          <Button id="icon" 
          className='bg-gradient-to-tl p-0.5 h-14 w-14 overflow-hidden rounded-xl from-[#25B4F8] to-[#1376F8]'
          content={(
            <div className='bg-white w-full h-full p-1 rounded-xl flex justify-center items-center'>
              <div className='bg-gradient-to-t from-transparent flex items-center justify-center w-full h-full rounded-lg to-[#E6F6FE]'>
              <div className='w-8 h-8 group'>
              <svg id='iconTelephone' className='group-hover:animate-phoneRing w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4077 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6698 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793ZM14.4181 5.48994C13.9421 5.402 13.5048 5.70579 13.4142 6.17047C13.3236 6.63515 13.6283 7.08884 14.0914 7.17978C15.4857 7.45159 16.5623 8.53085 16.8351 9.92989V9.93089C16.9128 10.3336 17.2674 10.6264 17.6757 10.6264C17.7305 10.6264 17.7852 10.6214 17.841 10.6114C18.3041 10.5185 18.6088 10.0658 18.5182 9.60012C18.1109 7.51055 16.5025 5.89666 14.4181 5.48994ZM16.0001 15.0905C16.4515 14.8302 16.9615 14.5362 17.6047 14.673C18.1873 14.7959 20.1731 16.4078 20.7169 16.9665C21.0734 17.3322 21.2716 17.7099 21.3025 18.0877C21.3562 19.5697 19.3425 21.2615 18.976 21.4724C18.489 21.8231 17.9224 22 17.286 22C16.6357 22 15.9106 21.8151 15.1199 21.4464C10.8296 19.6556 4.27553 13.231 2.54266 8.97395C1.82362 7.38903 1.81864 6.08193 2.53071 5.09961C2.81454 4.63892 4.43288 2.71325 5.88192 2.7742C6.26733 2.80718 6.64179 3.00505 7.00928 3.3648C7.56499 3.90942 9.13653 5.90106 9.25803 6.48565C9.39247 7.13521 9.09769 7.65185 8.83576 8.10554C8.7799 8.20307 8.70463 8.31881 8.62217 8.44561C8.3092 8.92683 7.89264 9.56735 8.04004 9.97626C9.09669 12.5705 11.5376 14.8339 14.133 15.8972C14.5343 16.0431 15.1745 15.6235 15.6542 15.3092C15.7791 15.2273 15.8932 15.1525 15.9893 15.0967L16.0001 15.0905Z" fill="#1376F8"/>
              </svg>
              </div>
              </div>
            </div>
          )}
          />
          <div id="desc">
            <h1 className='text-[#1376F8] font-generalSans font-medium'>Dental 24H Emergency</h1>
            <p className='font-generalSans font-medium text-[#011632]'>0900-78601</p>
          </div>
        </div>
      </div>
      <div id='doctor'>
      <Fade
      
      content={
      <>
      {dataFadeDoctor.map((data)=>(
        <SwiperSlide key={data.id} className='bg-white rounded-xl w-full overflow-hidden py-5'>
          <div id='name' className='flex flex-row justify-between pb-5 px-5 items-center'>
            <div className='flex flex-row items-center gap-3'>
            <img src={data.profile} alt="" className='w-10 h-10 object-cover rounded-full'/>
            <div id="titleName">
              <h1 className='font-medium'>{data.name}</h1>
              <h2>{data.title}</h2>
            </div></div>
            <div>
            <svg className='fill-[#1376F8] rounded-md' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </div>
          </div>
          <div id='feedback' className='px-5'>
            <p>{data.feedback}</p>
          </div>
        </SwiperSlide>
      ))}
      </>
      }
      />
      </div>

      </div>
    </article>
    </>
  )
}

export default HeaderArticle;
import React, { useEffect, useState } from 'react'
import './Banner.css'
import DoctorPict from '../../assets/doctorPict.png'
const Banner = () => {

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
    <article className='w-[27rem] relative flex justify-center my-16 items-center h-[27rem] md:w-[40rem] md:my-0 md:h-[40rem]'>
      <div className='border-4 border-dashed w-full h-full relative flex justify-center items-center rounded-full border-[#1376F8] md:w-full md:h-full'>
      <div id="toothTopRight" className='bg-[#1376F8] transition-all flex justify-center items-center rounded-full w-12 h-12 absolute top-5 right-[3.5rem] md:right-[6.5rem] md:h-14 md:w-14 md:top-7'>
      <svg  className={'w-6 h-6 rotate-12 md:w-8 md:h-8'} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4271 1.2606C12.9679 -0.0678761 11.3191 -0.0627595 10.0873 0.238459C8.86009 0.538487 7.57183 0.541066 6.34345 0.245953C5.11044 -0.050331 3.46167 -0.0488465 2.00772 1.28546C-0.747091 3.81367 1.48277 8.31555 2.15274 9.09042C2.82272 9.86529 2.84631 10.9002 3.32491 13.0123C3.80351 15.1244 4.4112 17.1283 5.61804 16.8241C6.82488 16.5198 7.1454 15.053 7.44331 13.0903C7.46383 12.9553 7.48519 12.8287 7.50729 12.7097C7.65912 11.8936 8.81817 11.8913 8.97326 12.7067C8.99584 12.8256 9.01779 12.9522 9.03886 13.0871C9.34463 15.0486 9.67101 16.5141 10.8791 16.8135C12.0871 17.113 12.6868 15.1066 13.1569 12.9926C13.6271 10.8786 13.6465 9.84362 14.3134 9.06608C14.9802 8.28853 17.1921 3.77775 14.4271 1.2606ZM5.99933 2.25754C5.96641 2.50551 5.73911 2.68013 5.49132 2.6483C5.40258 2.63749 3.43384 2.42413 2.88513 4.57407C2.83279 4.77903 2.64863 4.91552 2.44641 4.91593C2.40891 4.916 2.37085 4.91145 2.33287 4.90171C2.08993 4.83973 1.94324 4.59248 2.00523 4.34954C2.60646 1.99373 4.62524 1.61784 5.60875 1.74781C5.85735 1.78073 6.03216 2.00894 5.99933 2.25754Z" fill="white"/>
      </svg>
      </div>
      <div id="toothTopLeft" className='bg-[#1376F8] transition-all flex justify-center items-center rounded-full w-12 h-12 absolute top-5 left-[3.5rem] md:-left-[2rem] md:h-14 md:w-14 md:top-[18rem]'>
      <svg  className={'w-6 h-6 -rotate-12 md:w-8 md:h-8'} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4271 1.2606C12.9679 -0.0678761 11.3191 -0.0627595 10.0873 0.238459C8.86009 0.538487 7.57183 0.541066 6.34345 0.245953C5.11044 -0.050331 3.46167 -0.0488465 2.00772 1.28546C-0.747091 3.81367 1.48277 8.31555 2.15274 9.09042C2.82272 9.86529 2.84631 10.9002 3.32491 13.0123C3.80351 15.1244 4.4112 17.1283 5.61804 16.8241C6.82488 16.5198 7.1454 15.053 7.44331 13.0903C7.46383 12.9553 7.48519 12.8287 7.50729 12.7097C7.65912 11.8936 8.81817 11.8913 8.97326 12.7067C8.99584 12.8256 9.01779 12.9522 9.03886 13.0871C9.34463 15.0486 9.67101 16.5141 10.8791 16.8135C12.0871 17.113 12.6868 15.1066 13.1569 12.9926C13.6271 10.8786 13.6465 9.84362 14.3134 9.06608C14.9802 8.28853 17.1921 3.77775 14.4271 1.2606ZM5.99933 2.25754C5.96641 2.50551 5.73911 2.68013 5.49132 2.6483C5.40258 2.63749 3.43384 2.42413 2.88513 4.57407C2.83279 4.77903 2.64863 4.91552 2.44641 4.91593C2.40891 4.916 2.37085 4.91145 2.33287 4.90171C2.08993 4.83973 1.94324 4.59248 2.00523 4.34954C2.60646 1.99373 4.62524 1.61784 5.60875 1.74781C5.85735 1.78073 6.03216 2.00894 5.99933 2.25754Z" fill="white"/>
      </svg>
      </div>
      <div className='border-[3px] border-dashed rounded-full border-[#1376F8] w-[22rem] h-[22rem] md:w-[33rem] md:h-[33rem]'>
      <div id="toothTopRight" className='bg-[#1376F8] transition-all flex justify-center items-center rounded-full w-12 h-12 absolute top-5 right-[3.5rem] md:right-[6.5rem] md:h-14 md:w-14 md:top-7'>
      <svg  className={'w-6 h-6 rotate-12 md:w-8 md:h-8'} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4271 1.2606C12.9679 -0.0678761 11.3191 -0.0627595 10.0873 0.238459C8.86009 0.538487 7.57183 0.541066 6.34345 0.245953C5.11044 -0.050331 3.46167 -0.0488465 2.00772 1.28546C-0.747091 3.81367 1.48277 8.31555 2.15274 9.09042C2.82272 9.86529 2.84631 10.9002 3.32491 13.0123C3.80351 15.1244 4.4112 17.1283 5.61804 16.8241C6.82488 16.5198 7.1454 15.053 7.44331 13.0903C7.46383 12.9553 7.48519 12.8287 7.50729 12.7097C7.65912 11.8936 8.81817 11.8913 8.97326 12.7067C8.99584 12.8256 9.01779 12.9522 9.03886 13.0871C9.34463 15.0486 9.67101 16.5141 10.8791 16.8135C12.0871 17.113 12.6868 15.1066 13.1569 12.9926C13.6271 10.8786 13.6465 9.84362 14.3134 9.06608C14.9802 8.28853 17.1921 3.77775 14.4271 1.2606ZM5.99933 2.25754C5.96641 2.50551 5.73911 2.68013 5.49132 2.6483C5.40258 2.63749 3.43384 2.42413 2.88513 4.57407C2.83279 4.77903 2.64863 4.91552 2.44641 4.91593C2.40891 4.916 2.37085 4.91145 2.33287 4.90171C2.08993 4.83973 1.94324 4.59248 2.00523 4.34954C2.60646 1.99373 4.62524 1.61784 5.60875 1.74781C5.85735 1.78073 6.03216 2.00894 5.99933 2.25754Z" fill="white"/>
      </svg>
      </div>
      </div>
      </div>
      <img src={DoctorPict} alt="" className='absolute transition-all object-cover right-14 md:h-[40rem] md:right-20'/>
      <div id="gradient" className='absolute w-full md:w-[45rem] bottom-0 h-20 bg-gradient-to-t from-white to-transparent'>
      <div id="gradient" className='absolute w-full md:w-[45rem] bottom-0 h-20 bg-gradient-to-t from-white to-transparent'>
      <div id="gradient" className='absolute w-full md:w-[45rem] bottom-0 h-20 bg-gradient-to-t from-white to-transparent'></div>
      </div>
      </div>
    </article>
    </>
  )
}

export default Banner;
import React from 'react'
import './Playlist.css'
import { useState,useEffect,useRef } from 'react';
import Button from '../../components/button/button';
import Thumbnail from '../../assets/thumbnail.png'
import DentistVideo from '../../assets/dentistPlaylist.mp4'
const Playlist = () => {
  const videoDentistRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)
  const handleClick = ()=>{
    const video = videoDentistRef.current;
    if(isPlaying){
      video.pause();
    }else{
      video.play();
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <>
    <article className='w-full flex flex-col mt-40 mb-10 gap-10 transition-all md:items-center'>
      <div id="contentText" className='flex flex-col gap-7 md:items-center'>
        <h1 className='font-generalSans text-[2.5rem] font-semibold leading-tight w-[27rem] md:w-[55rem] md:text-center md:text-[3.5rem]'>We’re <span className='relative z-20'>Welcoming
      <svg className={'absolute w-full font-bold left-0 bottom-1 -z-10 md:w-full md:right-0'} viewBox="0 0 533 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2525 1.84646C23.5492 2.40025 53.2374 2.42795 133.83 2.48333C259.678 2.5664 359.557 3.17556 387.316 4.06163C389.521 4.1447 213.113 4.75387 194.997 4.31083C166.756 3.5909 31.8839 4.20008 4.74425 5.03077C-2.97055 5.25228 -0.077469 6.02759 4.95093 6.19373C12.8035 6.47063 33.8816 6.44293 91.674 6.38755C132.314 6.35986 455.648 6.99673 490.984 8.132C510.822 8.76886 522.877 9.35034 528.387 9.2119C533.002 9.10114 533.071 8.76886 529.076 7.85511C526.39 7.24594 529.42 6.88597 531.349 6.71983C534.311 6.44294 533.071 5.50149 529.352 4.75387C524.323 3.72935 515.644 3.75705 519.777 4.78156C520.672 5.00308 520.879 5.55687 517.71 5.44611C508.48 5.11383 443.249 2.84329 425.546 2.45564C236.533 -1.75318 52.0663 1.32036 13.0101 0.295843C-0.835204 -0.0918116 5.50205 1.51419 12.2525 1.84646Z" fill="#25B4F8"/>
      </svg></span> New Patients And Can’t Wait To Meet You.</h1>
        <p className='font-generalSans font-thin text-xl w-[25rem] md:w-[37rem] md:text-center md:text-2xl'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
      </div>
      <div id="video" className='video-player'>
      <div id='contentVideo' className='w-full transition-all h-max relative rounded-xl overflow-hidden md:w-[50rem]' onClick={handleClick}>
      <video className='' ref={videoDentistRef} controls>
        <source src={DentistVideo} type='video/mp4' className=''/>
      </video>
      {isPlaying ? (
        <div className='bg-black opacity-0 duration-700 ease-out absolute transition-all z-50 flex justify-center items-center top-0 left-0 w-full h-full'>
          <div id="btn" className='border-4 p-3 border-white rounded-full h-14 w-14 flex justify-center items-center'>
          <svg className='fill-white h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
          </div>
        </div>
      ): (
      <div className='bg-black bg-opacity-5 duration-700 ease-in transition-all absolute flex justify-center items-center z-50 top-0 left-0 w-full h-full'>
        <div id="btn" className='border-4 p-3 border-white rounded-full h-14 w-14 flex justify-center items-center'>
        <svg className='fill-white h-10 w-10 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        </div>
      </div>)
    }
      </div>
      </div>
      <Button 
      className={
        'text-white font-generalSans font-semibold bg-[#1376F8] h-14 w-44 mx-auto rounded-xl'
      }
      content={
        'Watch Playlist'
      }
      />
    </article>
    </>
  )
}

export default Playlist;
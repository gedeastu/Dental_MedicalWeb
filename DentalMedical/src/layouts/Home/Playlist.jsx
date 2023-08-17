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
    <article className='w-full flex flex-col gap-10 md:items-center'>
      <div id="contentText" className='flex flex-col gap-7'>
        <h1 className='font-generalSans text-[2.5rem] font-semibold leading-tight w-[27rem]'>We’re Welcoming New Patients And Can’t Wait To Meet You.</h1>
        <p className='font-generalSans font-thin text-xl w-[25rem]'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
      </div>
      <div id="video" className=''>
      <div id='contentVideo' className='w-full h-max relative rounded-xl overflow-hidden md:w-[35rem]' onClick={handleClick}>
      <video className='' ref={videoDentistRef} controls>
        <source src={DentistVideo} type='video/mp4'/>
      </video>
      {isPlaying ? (
        <div className='bg-black opacity-0 duration-700 ease-out absolute transition-all z-50 flex justify-center items-center top-0 left-0 w-full h-full'>
          <svg className='fill-white h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
        </div>
      ): (
      <div className='bg-black bg-opacity-20 duration-700 ease-in transition-all absolute flex justify-center items-center z-50 top-0 left-0 w-full h-full'>
        <svg className='fill-white h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
      </div>)
    }
      </div>
      </div>
    </article>
    </>
  )
}

export default Playlist;
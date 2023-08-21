import React, { useEffect, useState } from 'react'
import Button from '../../components/button/button'
import NavigateDesktop from '../../components/DesktopswiperNavigation/NavigateDesktop'
import './OurSpecialist.css'
import { OurSpecialistGetPosts } from '../../services/ourSpecialistAPI'
import { SwiperSlide } from 'swiper/react'
import Card from '../../components/card/card'
const OurSpecialist = () => {

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

  const [show,setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show);
  }
  // fecthing Our Specialist data API
  const [dataOurSpecialist,setDataOurSpecialist]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await OurSpecialistGetPosts();
      setDataOurSpecialist(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
     <div className='w-full h-full relative px-5 pt-16 pb-10 bg-[#E6F6FE] flex flex-col justify-between my-28 rounded-2xl md:items-center'>
      <div id="title" className='flex flex-col gap-5'>
        <h1 className='font-generalSans font-semibold text-[2.3rem] w-max'>Meet our specialists</h1>
        <p className='text-lg w-96'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
      </div>

      {show ? (
        <div id='specialistes' className='flex flex-col h-[265rem] transition-all duration-500 gap-10 items-center my-10 overflow-hidden md:hidden'>
        {dataOurSpecialist.map((data, index) => (
          <div id='content' key={data.id} className='h-96 w-[22rem] relative flex justify-center'>
            <img src={data.img} alt="" className='rounded-xl h-full w-full object-cover' />
            <div className='bgDesc absolute mx-auto w-80 z-10 text-white font-generalSans rounded-xl my-5 font-medium text-left pl-5 py-3 bottom-0'>
            <h1 className='text-xl'>{data.name}</h1>
            <p className='text-lg'>{data.specialist}.</p>
            </div>
          </div>
        ))}
        </div>
      ):(
        <div id='specialistes' className='flex flex-col gap-10 transition-all duration-500 items-center h-[53rem] my-10 overflow-hidden md:hidden'>
        {dataOurSpecialist.map((data, index) => (
          <div id='content' key={data.id} className='h-96 w-[22rem] relative flex justify-center'>
            <img src={data.img} alt="" className='rounded-xl h-full w-full object-cover' />
            <div className='bgDesc absolute mx-auto w-80 z-10 text-white font-generalSans rounded-xl my-5 font-medium text-left pl-5 py-3 bottom-0'>
            <h1 className='text-xl'>{data.name}</h1>
            <p className='text-lg'>{data.specialist}.</p>
            </div>
          </div>
        ))}
        </div>
      )}
      <Button
      onClick={handleClick} 
      content={
        show ? ('Close All Members') : ('View All Members')
      }
      className={
        'bg-[#1376F8] w-44 h-14 mx-auto font-medium rounded-xl md:hidden'
      }
      />
      <NavigateDesktop
      content={
        <>
        {dataOurSpecialist.map((data)=>(
        <SwiperSlide key={data.id} className=''>
         <div id='content' key={data.id} className='h-[30rem] mx-auto w-max gap-5 relative flex flex-row justify-center'>
            <img src={data.img} alt="" className='rounded-xl h-full w-full object-cover' />
            <div className='bgDesc absolute mx-auto w-96 z-10 text-white font-generalSans rounded-xl my-5 font-medium text-left pl-5 py-3 bottom-0'>
            <h1 className='text-xl'>{data.name}</h1>
            <p className='text-lg'>{data.specialist}.</p>
            </div>
          </div>
        </SwiperSlide>
        ))}
        </>
      }
      displayBtn={
        `hidden md:flex`
      }
      style={
        'hidden md:flex md:flex-row md:items-center md:gap-10 md:w-full md:h-full md:p-4'
      }
      buttonNext={
        <div className='bg-white h-full w-20 p-2 flex transition-all items-center group hover:bg-[#1376F8]'>
        {/* <svg className='rotate-180 w-20 group-hover:fill-white' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg> */}
        <svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </div>
      }
      buttonPrev={
        <div className='bg-white h-full w-20 p-2 flex items-center group hover:bg-[#1376F8]'>
        {/* <svg className='w-20 group-hover:text-base' width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.667 11.418C42.667 12.0508 41.9545 12.5738 41.03 12.6566L40.7731 12.668L2.89427 12.668C1.84827 12.668 1.00033 12.1083 1.00033 11.418C1.00033 10.7851 1.71284 10.2621 2.63727 10.1794L2.89427 10.168L40.7731 10.168C41.819 10.168 42.667 10.7276 42.667 11.418Z" fill="#011632"/>
        <path d="M12.382 20.6139C12.8712 21.101 12.8729 21.8924 12.3858 22.3816C11.943 22.8263 11.2486 22.8682 10.7585 22.5061L10.618 22.3854L0.534687 12.3454C0.0886258 11.9013 0.0480471 11.2044 0.412972 10.7143L0.534614 10.5739L10.6179 0.532257C11.1071 0.0451134 11.8986 0.0467521 12.3857 0.535917C12.8286 0.980613 12.8675 1.67513 12.5034 2.16373L12.3821 2.30368L3.18867 11.4601L12.382 20.6139Z" fill="#011632"/>
        </svg> */}
        <svg className='rotate-180 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
        </div>
      }
      />
      {/* <svg className="absolute left-0 right-0" viewBox="0 0 1440 566" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1838.5 391.205C1812.26 390.956 1611.26 558.855 1347.39 556.353C980.832 552.878 789.333 -67.5212 271.425 100.484C-139.163 233.676 -319.209 246.637 -393.267 150.596" stroke="#C1DEEF"/>
      <path d="M1839.89 244.541C1816.53 257.295 1611.26 558.853 1347.39 556.352C980.832 552.876 728.722 -0.401011 210.814 167.605C-199.774 300.797 -264.032 278.186 -393.802 207.003" stroke="#C1DEEF"/>
      <path d="M1837.64 481.457C1811.41 481.208 1611.21 563.367 1347.35 560.865C980.789 557.389 786.009 -168.514 301.902 48.8717C-51.2019 207.431 -259.454 269.768 -393.695 195.722" stroke="#C1DEEF"/>
      </svg> */}
     </div>
    </>
  )
}
export default OurSpecialist;
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
      <div id="title" className='flex flex-col gap-4 md:items-center'>
        <h1 className='font-generalSans font-semibold text-[2.3rem] w-max md:text-[3.5rem]'>Meet our <span className='relative z-20'>Specialist
        <svg className={'absolute w-72 -z-20 font-bold md:w-full md:right-0 md:bottom-0'} viewBox="0 0 533 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2525 1.84646C23.5492 2.40025 53.2374 2.42795 133.83 2.48333C259.678 2.5664 359.557 3.17556 387.316 4.06163C389.521 4.1447 213.113 4.75387 194.997 4.31083C166.756 3.5909 31.8839 4.20008 4.74425 5.03077C-2.97055 5.25228 -0.077469 6.02759 4.95093 6.19373C12.8035 6.47063 33.8816 6.44293 91.674 6.38755C132.314 6.35986 455.648 6.99673 490.984 8.132C510.822 8.76886 522.877 9.35034 528.387 9.2119C533.002 9.10114 533.071 8.76886 529.076 7.85511C526.39 7.24594 529.42 6.88597 531.349 6.71983C534.311 6.44294 533.071 5.50149 529.352 4.75387C524.323 3.72935 515.644 3.75705 519.777 4.78156C520.672 5.00308 520.879 5.55687 517.71 5.44611C508.48 5.11383 443.249 2.84329 425.546 2.45564C236.533 -1.75318 52.0663 1.32036 13.0101 0.295843C-0.835204 -0.0918116 5.50205 1.51419 12.2525 1.84646Z" fill="#25B4F8"/>
        </svg></span></h1>
        <p className='text-lg mb-12 w-96 md:w-[45rem] md:text-center md:text-xl'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
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
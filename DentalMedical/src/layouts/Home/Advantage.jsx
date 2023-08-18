import './Advantage.css'
import Button from '../../components/button/button'
import React, { useState,useEffect } from 'react'
import dentist from '../../assets/dentist.jpg'
import { AdvantageGetPosts } from '../../services/advantageAPI'
const Advantage = () => {
  // fecthing fade doctor data API
  const [dataAdvantage,setDataAdvantage]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await AdvantageGetPosts();
      setDataAdvantage(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
    <article className='w-full h-full mt-20 bg-[#E6F6FE] transition-all rounded-xl pt-20 pb-16 px-7 flex flex-col gap-8 md:mt-32 md:flex-row-reverse md:justify-between md:items-center md:py-10 md:px-32'>
    <div id='desc' className='flex flex-col gap-7'>
    <h1 className='font-semibold font-generalSans text-[2.6rem] leading-tight md:leading-[4rem] md:text-[3rem]'>Why Choose <span className='relative z-20'>Smile 
      <svg className={'absolute left-0 bottom-1 -z-10 w-full md:right-0'} viewBox="0 0 533 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2525 1.84646C23.5492 2.40025 53.2374 2.42795 133.83 2.48333C259.678 2.5664 359.557 3.17556 387.316 4.06163C389.521 4.1447 213.113 4.75387 194.997 4.31083C166.756 3.5909 31.8839 4.20008 4.74425 5.03077C-2.97055 5.25228 -0.077469 6.02759 4.95093 6.19373C12.8035 6.47063 33.8816 6.44293 91.674 6.38755C132.314 6.35986 455.648 6.99673 490.984 8.132C510.822 8.76886 522.877 9.35034 528.387 9.2119C533.002 9.10114 533.071 8.76886 529.076 7.85511C526.39 7.24594 529.42 6.88597 531.349 6.71983C534.311 6.44294 533.071 5.50149 529.352 4.75387C524.323 3.72935 515.644 3.75705 519.777 4.78156C520.672 5.00308 520.879 5.55687 517.71 5.44611C508.48 5.11383 443.249 2.84329 425.546 2.45564C236.533 -1.75318 52.0663 1.32036 13.0101 0.295843C-0.835204 -0.0918116 5.50205 1.51419 12.2525 1.84646Z" fill="#25B4F8"/>
      </svg></span>
    <br className='md:hidden'/> For All <br className='hidden md:flex'/> Your Dental <br className='md:hidden'/> Treatments?</h1>
    <p className='font-thin text-lg w-[22.5rem] md:w-[33rem] md:text-xl'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
    <div id="advantage">
    <div className={`flex flex-col gap-3`}>
    {dataAdvantage.map((data)=>(
      <div key={data.id} className="flex flex-col">
        <div className='flex flex-row items-center gap-5'>
        <img src={data.icon} alt="" className='w-7'/>
        <p className='font-medium text-lg'>{data.content}</p>
        </div>
      </div>
    ))}
    </div>
    </div>
    <Button className={'bg-[#1376F8] p-4 rounded-xl w-52'} 
    content={'Book an appointment'}/>
    </div>
    <div id="banner" className='h-[25rem] md:w-[35rem] md:h-[38rem]'>
      <img src={dentist} alt="" className='w-full h-full shadow-md object-cover rounded-xl'/>
    </div>
    </article>
    </>
  )
}

export default Advantage
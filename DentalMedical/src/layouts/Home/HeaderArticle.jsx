import React from 'react'
import Button from '../../components/button/button';
const HeaderArticle = () => {
  return (
    <>
    <article className='flex flex-col gap-8 md:flex-row'>
      <div className='flex flex-col gap-7 md:gap-9'>
      <div id='h1'>
        <h1 className='text-[#011632] font-generalSans font-semibold text-5xl leading-tight md:text-6xl md:leading-tight'>Get Ready For Your Best <br className='hidden md:flex' /> Ever <span className='relative z-20'>Dental Experience!
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
      <div id='btn'>
        <Button
        className="bg-blue-400"
        text="Get Started"
        />
      </div>
      </div>
    </article>
    </>
  )
}

export default HeaderArticle;
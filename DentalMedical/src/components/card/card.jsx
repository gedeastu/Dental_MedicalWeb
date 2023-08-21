import React from 'react'

const Card = ({children}) => {
  return (
    <>
    <div className='w-96 h-96'>
        <img src={children} alt="" className='w-full h-full relative'/>
        <div id="desc" className='absolute bottom-0'>
           {children}
        </div>
    </div>
    </>
  )
}

export default Card;
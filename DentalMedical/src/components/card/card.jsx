import React from 'react'

const Card = ({children}) => {
  return (
    <>
    <div className='w-[22rem] h-96'>
        <div id="desc" className='absolute bottom-0'>
           {children}
        </div>
    </div>
    </>
  )
}

export default Card;
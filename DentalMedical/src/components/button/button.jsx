import React from 'react'

const Button = ({content, className, onClick}) => {
  return (
    <>
    <button onClick={onClick} className={`relative font-generalSans font-medium text-white ${className}`}>{content}</button>
    </>
  )
}

export default Button;
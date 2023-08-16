import React from 'react'

const Button = ({content, className}) => {
  return (
    <>
    <button className={`relative font-generalSans font-medium text-white ${className}`}>{content}</button>
    </>
  )
}

export default Button;